
# Rest Error Response Error

## Structure

`RestErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `3`, *Pattern*: `^[0-9]{3}$` |
| `errorMessage` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "errorCode": "400",
  "errorMessage": "a description of the error"
}
```

