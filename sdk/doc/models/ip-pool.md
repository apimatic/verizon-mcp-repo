
# IP Pool

IP pool that is available to the account.

## Structure

`IPPool`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string \| undefined` | Optional | The name of the IP pool. |
| `poolType` | `string \| undefined` | Optional | The type of IP pool, such as “Static IP” or “Dynamic IP.” |
| `isDefaultPool` | `boolean \| undefined` | Optional | True if this is the default IP pool for the account. |

## Example (as JSON)

```json
{
  "poolName": "ACMESTATIC001",
  "poolType": "Static IP",
  "isDefaultPool": true
}
```

