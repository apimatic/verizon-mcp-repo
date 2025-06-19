
# Register Callback Request

Request to register a callback.

## Structure

`RegisterCallbackRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the callback service that you want to subscribe to. |
| `url` | `string` | Required | The address on your server where you have enabled a listening service for callback messages. |
| `username` | `string \| undefined` | Optional | The user name that the M2M Platform should return in the callback messages. |
| `password` | `string \| undefined` | Optional | The password that the M2M Platform should return in the callback messages. |

## Example (as JSON)

```json
{
  "name": "CarrierService",
  "url": "https://mock.thingspace.verizon.com/webhook",
  "username": "username0",
  "password": "password4"
}
```

