<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@soulmachines/smwebsdk](./smwebsdk.md) &gt; [Scene](./smwebsdk.scene.md) &gt; [(constructor)](./smwebsdk.scene._constructor__1.md)

## Scene.(constructor)

> Warning: This API is now obsolete.
> 
> Use `new Scene(options: SceneOptions)` instead
> 

Construct Scene with parameters

<b>Signature:</b>

```typescript
constructor(videoElement?: HTMLVideoElement, audioOnly?: boolean, requestedUserMedia?: UserMedia, requiredUserMedia?: UserMedia, contentAwarenessDebounceTime?: number, loggingConfig?: Partial<LoggingConfig>, tracerOptions?: TracerOptions);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  videoElement | HTMLVideoElement | <i>(Optional)</i> A video element that will display the connected scene |
|  audioOnly | boolean | <i>(Optional)</i> This streaming should be audio streaming only (no video streaming) |
|  requestedUserMedia | [UserMedia](./smwebsdk.usermedia.md) | <i>(Optional)</i> The user media devices (microphone/camera) that should be requested, one of: UserMedia.None, UserMedia.Microphone, UserMedia.MicrophoneAndCamera (default) |
|  requiredUserMedia | [UserMedia](./smwebsdk.usermedia.md) | <i>(Optional)</i> Required user media devices, one of: UserMedia.None, UserMedia.Microphone, UserMedia.MicrophoneAndCamera If less user media devices are requested then are required then the requirements takes precedence. If this user media requirements is not met then Connect() will fail. |
|  contentAwarenessDebounceTime | number | <i>(Optional)</i> The timeout period used for debouncing messaging within the content awareness class |
|  loggingConfig | Partial&lt;[LoggingConfig](./smwebsdk.loggingconfig.md)<!-- -->&gt; | <i>(Optional)</i> Options to configure different log levels for different classes |
|  tracerOptions | TracerOptions | <i>(Optional)</i> |

