
# Account

Returns information about a specified account.

## Structure

`Account`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of the account. |
| `accountNumber` | `string \| undefined` | Optional | The billing number of the account. |
| `organizationName` | `string \| undefined` | Optional | The name of the organization that the account is part of. |
| `isProvisioningAllowed` | `boolean \| undefined` | Optional | True if devices can be added to the account and activated with a single request. False if devices must be added to the account before they can be activated. |
| `carriers` | `string[] \| undefined` | Optional | The names of all carriers for the account. |
| `features` | `string[] \| undefined` | Optional | The names of features that are enabled for the account. |
| `iPPools` | [`IPPool[] \| undefined`](../../doc/models/ip-pool.md) | Optional | Array of IP pools that are available to the account. |
| `servicePlans` | [`ServicePlan[] \| undefined`](../../doc/models/service-plan.md) | Optional | Array of service plans that are available to the account. |

## Example (as JSON)

```json
{
  "accountName": "Chintan_CPNStaticBulk",
  "accountNumber": "1234567890-77777",
  "organizationName": "ChintanCPNBulk",
  "isProvisioningAllowed": true,
  "carriers": [
    "Verizon Wireless"
  ],
  "features": [
    "Static IP",
    "Dynamic IP",
    "Customer PN"
  ],
  "iPPools": [
    {
      "poolName": "ACMESTATIC001",
      "poolType": "Static IP",
      "isDefaultPool": true
    },
    {
      "poolName": "ACMEDYNAMIC001",
      "poolType": "Dynamic IP",
      "isDefaultPool": false
    }
  ],
  "servicePlans": [
    {
      "name": "",
      "code": "92876",
      "sizeKb": 1,
      "carrierServicePlanCode": "",
      "extendedAttributes": []
    },
    {
      "name": "",
      "code": "92876",
      "sizeKb": 1,
      "carrierServicePlanCode": "",
      "extendedAttributes": []
    }
  ]
}
```

