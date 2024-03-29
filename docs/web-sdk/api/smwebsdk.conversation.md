<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@soulmachines/smwebsdk](./smwebsdk.md) &gt; [Conversation](./smwebsdk.conversation.md)

## Conversation class

Stores content cards and conversation state

<b>Signature:</b>

```typescript
export declare class Conversation 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(logger, conversationState, contentCardFormatter)](./smwebsdk.conversation._constructor_.md) |  | Constructs a new instance of the <code>Conversation</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [activeCardIds](./smwebsdk.conversation.activecardids.md) |  | Set&lt;string&gt; |  |
|  [activeCards](./smwebsdk.conversation.activecards.md) | <code>readonly</code> | [ContentCardRawData](./smwebsdk.contentcardrawdata.md)<!-- -->\[\] |  |
|  [autoClearCards](./smwebsdk.conversation.autoclearcards.md) |  | boolean | Automatically clear active content cards each conversation turn |
|  [cardData](./smwebsdk.conversation.carddata.md) |  | Map&lt;string, [ContentCardRawData](./smwebsdk.contentcardrawdata.md)<!-- -->&gt; |  |
|  [onCardChanged](./smwebsdk.conversation.oncardchanged.md) | <code>readonly</code> | [SmEvent](./smwebsdk.smevent.md) | A callback function which fires when active cards are changed |
|  [onConversationStateUpdated](./smwebsdk.conversation.onconversationstateupdated.md) | <code>readonly</code> | [SmEvent](./smwebsdk.smevent.md) | A callback function which fires when conversation state changes |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [clearActiveCards()](./smwebsdk.conversation.clearactivecards.md) |  | Clears active card ids. Emits a card changed event |
|  [onConversationResult(messageBody)](./smwebsdk.conversation.onconversationresult.md) |  | Stores content card data contained in conversation result messages |
|  [onSpeechMarker(messageBody)](./smwebsdk.conversation.onspeechmarker.md) |  | Handles speech marker messages and updates the active card state |
|  [processRecognizeResultsMessage(message)](./smwebsdk.conversation.processrecognizeresultsmessage.md) |  |  |
|  [processStateMessage(message)](./smwebsdk.conversation.processstatemessage.md) |  |  |
|  [reset()](./smwebsdk.conversation.reset.md) |  | Clears active card ids and data. Emits a card changed event |

