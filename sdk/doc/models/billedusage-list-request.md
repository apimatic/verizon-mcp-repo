
# Billedusage List Request

Information required to associate a usage segmentation label with a device to retrieve billing.

## Structure

`BilledusageListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `labels` | [`LabelsList \| undefined`](../../doc/models/labels-list.md) | Optional | - |
| `deviceIds` | [`DeviceList[] \| undefined`](../../doc/models/device-list.md) | Optional | - |
| `billingCycle` | [`BillingCycle \| undefined`](../../doc/models/billing-cycle.md) | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "9231221278-99990",
  "labels": {
    "deviceIds": [
      {
        "name": "name6",
        "value": "value8"
      }
    ]
  },
  "deviceIds": [
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        },
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    },
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        },
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    }
  ],
  "billingCycle": {
    "year": "year6",
    "month": "month4"
  }
}
```

