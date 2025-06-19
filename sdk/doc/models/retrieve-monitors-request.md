
# Retrieve Monitors Request

## Structure

`RetrieveMonitorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of a billing account. |
| `devices` | [`AccountDeviceList[]`](../../doc/models/account-device-list.md) | Required | The devices for which you want to restore service, specified by device identifier. |
| `monitorType` | `string \| undefined` | Optional | The name of a billing account. |

## Example (as JSON)

```json
{
  "accountName": "0868924207-00001",
  "devices": [
    {
      "deviceIds": [
        {
          "id": "89148000000800139708",
          "kind": "iccid"
        }
      ],
      "ipAddress": "ipAddress4"
    }
  ],
  "monitorType": "monitorType"
}
```

