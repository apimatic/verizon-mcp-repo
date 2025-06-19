
# Account Device List Request

Request for listing account devices.

## Structure

`AccountDeviceListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The billing account for which a list of devices is returned. If you don't specify an accountName, the list includes all devices to which you have access. |
| `deviceId` | [`DeviceId \| undefined`](../../doc/models/device-id.md) | Optional | An identifier for a single device. |
| `filter` | [`AccountDeviceListFilter \| undefined`](../../doc/models/account-device-list-filter.md) | Optional | Filter for a list of devices. |
| `currentState` | `string \| undefined` | Optional | The name of a device state, to only include devices in that state. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |
| `earliest` | `string \| undefined` | Optional | Only include devices that were added after this date and time. |
| `groupName` | `string \| undefined` | Optional | Only include devices that are in this device group. |
| `latest` | `string \| undefined` | Optional | Only include devices that were added before this date and time. |
| `servicePlan` | `string \| undefined` | Optional | Only include devices that have this service plan. |
| `maxNumberOfDevices` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |
| `largestDeviceIdSeen` | `bigint \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example (as JSON)

```json
{
  "accountName": "0786890242-00001",
  "filter": {
    "deviceIdentifierFilters": [
      {
        "kind": "iccid",
        "contains": "4259",
        "startswith": "startswith8",
        "endswith": "endswith0"
      }
    ]
  },
  "deviceId": {
    "id": "id0",
    "kind": "kind8"
  },
  "currentState": "currentState0",
  "customFields": [
    {
      "key": "key0",
      "value": "value2"
    },
    {
      "key": "key0",
      "value": "value2"
    }
  ]
}
```

