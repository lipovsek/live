---
id: "imagemodule.image"
title: "Interface: Image"
sidebar_label: "Image"
custom_edit_url: null
---

[ImageModule](../modules/imagemodule.md).Image

An image is a high-level data type, which can be used for model inference
with [MobileModel.execute](mobilemodelmodule.mobilemodel.md#execute) or it can be drawn on a [[Canvas.drawImage]].

An [Image](imagemodule.image.md) object in JavaScript is a reference to a native image object
wrapped in [NativeJSRef](../modules/nativejsref.md). The image data is not transferred over the React
Native Bridge, but it offers functions to manipulate the image. All
functions are executed `async` in native.

:::info

Eventually, this will change with the introduction of the new React Native
architecture including JSI, Fabric, and TurboModules.

:::

## Hierarchy

- [NativeJSRef](nativejsref.nativejsref-1.md)

  ↳ **Image**

## Properties

### ID

• **ID**: `string`

The internal ID for the object instance in native. Instead of serializing
the object in native and sending it via the React Native Bridge, each
native object will be assigned an ID which is sent to JavaScript instead.
The ID will be used to reference the native object instance when calling
functions on the JavaScript object.

#### Inherited from

[NativeJSRef](nativejsref.nativejsref-1.md).[ID](nativejsref.nativejsref-1.md#id)

#### Defined in

[NativeJSRef.ts:64](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/NativeJSRef.ts#L64)

## Methods

### getHeight

▸ **getHeight**(): `number`

Get the height of an image (in pixel).

#### Returns

`number`

#### Defined in

[ImageModule.ts:44](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L44)

___

### getNaturalHeight

▸ **getNaturalHeight**(): `number`

Get the natural height of an image (in pixel).

#### Returns

`number`

#### Defined in

[ImageModule.ts:54](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L54)

___

### getNaturalWidth

▸ **getNaturalWidth**(): `number`

Get the natural width of an image (in pixel).

#### Returns

`number`

#### Defined in

[ImageModule.ts:59](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L59)

___

### getPixelDensity

▸ **getPixelDensity**(): `number`

Get the pixel density for this image. The `width` and `height` multiplied
by the `pixelDensity` is `naturalWidth` and `naturalHeight`.

#### Returns

`number`

#### Defined in

[ImageModule.ts:65](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L65)

___

### getWidth

▸ **getWidth**(): `number`

Get the width of an image (in pixel).

#### Returns

`number`

#### Defined in

[ImageModule.ts:49](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L49)

___

### release

▸ **release**(): `Promise`<void\>

Until explicitly released, an [Image](imagemodule.image.md) will have a reference in memory.
Not calling [Image.release](imagemodule.image.md#release) can eventually result in an
`OutOfMemoryException`.

:::caution

While this is an `async` function, it does not need to be `await`ed. For
example, the `GC` on Android will eventually free the allocated memory.

:::

#### Returns

`Promise`<void\>

#### Defined in

[ImageModule.ts:79](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L79)

___

### scale

▸ **scale**(`sx`, `sy`): `Promise`<[Image](imagemodule.image.md)\>

The [Image.scale](imagemodule.image.md#scale) method of the [Image](imagemodule.image.md) API adds a scaling
transformation horizontally and/or vertically. For instance, a scaling
factor of `0.5` results in a unit size of `0.5` pixels; the image is thus
at half the normal size. Similarly, a scaling factor of `2.0` increases
the unit size so that one unit becomes two pixels; images are thus at
twice the normal size.

The method will apply the scaling on a copy of the [Image](imagemodule.image.md) and return
the scaled [Image](imagemodule.image.md) asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sx` | `number` | Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of `1` results in no horizontal scaling. |
| `sy` | `number` | Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of `1` results in no vertical scaling. |

#### Returns

`Promise`<[Image](imagemodule.image.md)\>

#### Defined in

[ImageModule.ts:95](https://github.com/lipovsek/live/blob/c323b14/react-native-pytorch-core/src/ImageModule.ts#L95)
