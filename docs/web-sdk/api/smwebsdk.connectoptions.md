<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@soulmachines/smwebsdk](./smwebsdk.md) &gt; [ConnectOptions](./smwebsdk.connectoptions.md)

## ConnectOptions interface

Configuration to use when connecting to a Scene

<b>Signature:</b>

```typescript
export interface ConnectOptions 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [retryOptions?](./smwebsdk.connectoptions.retryoptions.md) |  | [RetryOptions](./smwebsdk.retryoptions.md) | <i>(Optional)</i> Options for customizing connection error retries |
|  [tokenServer?](./smwebsdk.connectoptions.tokenserver.md) |  | { uri: string; token: string; } | <i>(Optional)</i> The custom token server config |
|  [userText?](./smwebsdk.connectoptions.usertext.md) |  | string | <i>(Optional)</i> A custom text string that is sent to the orchestration server |

