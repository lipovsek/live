/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <jsi/jsi.h>

#include <ATen/NativeFunctions.h>
#include <torch/csrc/jit/mobile/import.h>
#include <torch/script.h>
#include <string>
#include <vector>

#include "../torch/TensorHostObject.h"
#include "../torch/utils/helpers.h"
#include "CenterCropHostObject.h"
#include "scripted/center_crop_scriptmodule.h"

namespace torch_ = torch;

namespace torchlive {
namespace torchvision {
namespace transforms {

using namespace facebook;

// CenterCropHostObject Method Name
static const std::string FORWARD = "forward";

// CenterCropHostObject Property Names
static const std::string SIZE = "size";

// CenterCropHostObject Properties
static const std::vector<std::string> PROPERTIES = {SIZE};

// CenterCropHostObject Methods
const std::vector<std::string> METHODS = {
    FORWARD,
};

static std::vector<int64_t> parseSize(
    jsi::Runtime& runtime,
    const jsi::Value& shape) {
  std::vector<double> shapeData =
      torchlive::utils::helpers::parseJSIArrayData(runtime, shape);

  auto ndims = shapeData.size();
  if (ndims < 1) {
    throw jsi::JSError(
        runtime,
        "Not enough values to unpack (expect 2, got " + std::to_string(ndims) +
            ")");
  }
  if (ndims > 2) {
    throw jsi::JSError(
        runtime,
        "Too many values to unpack (expect 2, got " + std::to_string(ndims) +
            ")");
  }
  std::vector<int64_t> shapeVector(shapeData.begin(), shapeData.end());

  return shapeVector;
}

static torch_::jit::mobile::Module loadScriptedModule() {
  std::stringstream is;
  is.write(
      (char*)center_crop_scriptmodule_ptl, center_crop_scriptmodule_ptl_len);
  return torch_::jit::_load_for_mobile(is, torch_::kCPU);
}

CenterCropHostObject::CenterCropHostObject(
    jsi::Runtime& runtime,
    const jsi::Value& shape)
    : forward_(createForward(runtime)),
      shape_(parseSize(runtime, shape)),
      module_(loadScriptedModule()),
      size(jsi::Value(runtime, shape)) {}

std::vector<jsi::PropNameID> CenterCropHostObject::getPropertyNames(
    jsi::Runtime& rt) {
  std::vector<jsi::PropNameID> result;
  for (std::string property : PROPERTIES) {
    result.push_back(jsi::PropNameID::forUtf8(rt, property));
  }
  for (std::string method : METHODS) {
    result.push_back(jsi::PropNameID::forUtf8(rt, method));
  }
  return result;
}

jsi::Value CenterCropHostObject::get(
    jsi::Runtime& runtime,
    const jsi::PropNameID& propName) {
  auto name = propName.utf8(runtime);
  if (name == FORWARD) {
    return jsi::Value(runtime, forward_);
  } else if (name == SIZE) {
    return jsi::Value(runtime, size);
  }

  return jsi::Value::undefined();
}

jsi::Function CenterCropHostObject::createForward(jsi::Runtime& runtime) {
  auto forwardFunc = [this](
                         jsi::Runtime& runtime,
                         const jsi::Value& thisValue,
                         const jsi::Value* arguments,
                         size_t count) -> jsi::Value {
    auto tensorHostObject =
        torchlive::utils::helpers::parseTensor(runtime, &arguments[0]);
    auto tensor = tensorHostObject->tensor;
    std::vector<torch_::jit::IValue> inputs;
    inputs.push_back(tensor);
    c10::ArrayRef<int64_t> shapeArrayRef(this->shape_);
    inputs.push_back(shapeArrayRef);

    auto centerCropped = module_.forward(inputs).toTensor();
    auto centerCroppedTensorHostObject =
        std::make_shared<torchlive::torch::TensorHostObject>(
            runtime, centerCropped);

    return jsi::Object::createFromHostObject(
        runtime, centerCroppedTensorHostObject);
  };

  return jsi::Function::createFromHostFunction(
      runtime, jsi::PropNameID::forUtf8(runtime, FORWARD), 1, forwardFunc);
}

} // namespace transforms
} // namespace torchvision
} // namespace torchlive
