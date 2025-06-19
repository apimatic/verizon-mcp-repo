
# Service Plan Update Request

Request to update service plan.

## Structure

`ServicePlanUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `servicePlan` | `string` | Required | The service plan code that you want to assign to all specified devices. |
| `accountName` | `string \| undefined` | Optional | The name of a billing account. |
| `currentServicePlan` | `string \| undefined` | Optional | The name of a service plan, if you want to only include devices that have that service plan. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | Custom field names and values, if you want to only include devices that have matching values. |
| `devices` | [`AccountDeviceList[] \| undefined`](../../doc/models/account-device-list.md) | Optional | A list of the devices that you want to change, specified by device identifier. |
| `groupName` | `string \| undefined` | Optional | The name of a device group, if you want to restore service for all devices in that group. |
| `carrierIpPoolName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `takeEffect` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "devices": [
    {
      "deviceIds": [
        {
          "id": "A100003685E561",
          "kind": "meid"
        }
      ],
      "ipAddress": "ipAddress4"
    }
  ],
  "servicePlan": "new_service_plan_code",
  "accountName": "accountName4",
  "currentServicePlan": "currentServicePlan6",
  "customFields": [
    {
      "key": "key0",
      "value": "value2"
    },
    {
      "key": "key0",
      "value": "value2"
    }
  ],
  "groupName": "groupName0"
}
```

