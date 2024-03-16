<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@soulmachines/smwebsdk](./smwebsdk.md) &gt; [ConversationResultResponseBody](./smwebsdk.conversationresultresponsebody.md)

## ConversationResultResponseBody interface


<b>Signature:</b>

```typescript
export interface ConversationResultResponseBody 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [errorMessage?](./smwebsdk.conversationresultresponsebody.errormessage.md) |  | string | <i>(Optional)</i> |
|  [input](./smwebsdk.conversationresultresponsebody.input.md) |  | { text: string; context?: any; } |  |
|  [output](./smwebsdk.conversationresultresponsebody.output.md) |  | { text: string; context: Record&lt;string, string \| unknown&gt;; provider?: { kind: 'watson' \| 'dialogflow'; meta: any; }; } |  |
|  [personaId](./smwebsdk.conversationresultresponsebody.personaid.md) |  | PersonaId |  |
|  [provider](./smwebsdk.conversationresultresponsebody.provider.md) |  | { kind: string; meta: { conversation\_id?: string; dialogflow?: { responseId: string; queryResult: { allRequiredParamsPresent: boolean; fulfillmentMessages: any\[\]; fulfillmentText: string; intent: { displayName: string; name: string; }; intentDetectionConfidence: number; languageCode: string; outputContexts: { lifespanCount: number; name: string; parameters: Record&lt;string, string \| unknown&gt;; }\[\]; }; }; }; } |  |
|  [status](./smwebsdk.conversationresultresponsebody.status.md) |  | number |  |
