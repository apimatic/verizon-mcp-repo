
# Carrier Deactivate Request

Request to deactivate a carrier.

## Structure

`CarrierDeactivateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of a billing account. |
| `devices` | [`AccountDeviceList[]`](../../doc/models/account-device-list.md) | Required | The devices for which you want to deactivate service, specified by device identifier. |
| `reasonCode` | `string` | Required | Code identifying the reason for the deactivation. Currently the only valid reason code is “FF”, which corresponds to General Admin/Maintenance. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |
| `etfWaiver` | `boolean \| undefined` | Optional | Fees may be assessed for deactivating Verizon Wireless devices, depending on the account contract. The etfWaiver parameter waives the Early Termination Fee (ETF), if applicable. |
| `groupName` | `string \| undefined` | Optional | The name of a device group, if you want to deactivate all devices in that group. |
| `servicePlan` | `string \| undefined` | Optional | The name of a service plan, if you want to only include devices that have that service plan. |
| `deleteAfterDeactivation` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "devices": [
    {
      "deviceIds": [
        {
          "id": "20-digit ICCID",
          "kind": "iccid"
        }
      ],
      "ipAddress": "ipAddress4"
    },
    {
      "deviceIds": [
        {
          "id": "20-digit ICCID",
          "kind": "iccid"
        }
      ],
      "ipAddress": "ipAddress4"
    }
  ],
  "reasonCode": "FF",
  "etfWaiver": true,
  "customFields": [
    {
      "key": "key0",
      "value": "value2"
    },
    {
      "key": "key0",
      "value": "value2"
    },
    {
      "key": "key0",
      "value": "value2"
    }
  ],
  "groupName": "groupName8",
  "servicePlan": "servicePlan2",
  "deleteAfterDeactivation": false
}
```

