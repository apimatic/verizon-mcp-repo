# Account Requests

```ts
const accountRequestsController = new AccountRequestsController(client);
```

## Class Name

`AccountRequestsController`


# Get Current Asynchronous Request Status

Returns the current status of an asynchronous request that was made for a single device.

```ts
async getCurrentAsynchronousRequestStatus(
  aname: string,
  requestId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AsynchronousRequestResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestId` | `string` | Template, Required | UUID from synchronous response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [AsynchronousRequestResult](../../doc/models/asynchronous-request-result.md).

## Example Usage

```ts
const aname = '0252012345-00001';

const requestId = '86c83330-4bf5-4235-9c4e-a83f93aeae4c';

try {
  const { result, ...httpResponse } = await accountRequestsController.getCurrentAsynchronousRequestStatus(
  aname,
  requestId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "86c83330-4bf5-4235-9c4e-a83f93aeae4c",
  "status": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

