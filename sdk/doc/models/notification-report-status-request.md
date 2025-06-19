
# Notification Report Status Request

## Structure

`NotificationReportStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of a billing account. |
| `device` | [`DeviceId`](../../doc/models/device-id.md) | Required | An identifier for a single device. |
| `requestType` | `string` | Required | The type of request. |
| `requestExpirationTime` | `string \| undefined` | Optional | The time at which the request expires. |

## Example (as JSON)

```json
{
  "accountName": "0868924207-00001",
  "device": {
    "kind": "imei",
    "id": "990013907835573"
  },
  "requestType": "requestType8",
  "requestExpirationTime": "requestExpirationTime6"
}
```

