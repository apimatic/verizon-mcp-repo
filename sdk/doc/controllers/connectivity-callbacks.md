# Connectivity Callbacks

```ts
const connectivityCallbacksController = new ConnectivityCallbacksController(client);
```

## Class Name

`ConnectivityCallbacksController`

## Methods

* [List Registered Callbacks](../../doc/controllers/connectivity-callbacks.md#list-registered-callbacks)
* [Register Callback](../../doc/controllers/connectivity-callbacks.md#register-callback)
* [Deregister Callback](../../doc/controllers/connectivity-callbacks.md#deregister-callback)


# List Registered Callbacks

Returns the name and endpoint URL of the callback listening services registered for a given account.

```ts
async listRegisteredCallbacks(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectivityManagementCallback[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ConnectivityManagementCallback[]](../../doc/models/connectivity-management-callback.md).

## Example Usage

```ts
const aname = '0252012345-00001';

try {
  const { result, ...httpResponse } = await connectivityCallbacksController.listRegisteredCallbacks(aname);
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
[
  {
    "accountName": "0252012345-00001",
    "serviceName": "CarrierService",
    "url": "http://10.120.102.147:50569/CallbackListener/Carrier.asmx"
  },
  {
    "accountName": "0252012345-00001",
    "password": "drowssap",
    "serviceName": "DeviceUsage",
    "url": "http://10.120.102.147:50569/CallbackListener/Usage.asmx",
    "username": "zaffod"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Register Callback

You are responsible for creating and running a listening process on your server at that URL.

```ts
async registerCallback(
  aname: string,
  body: RegisterCallbackRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackActionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `body` | [`RegisterCallbackRequest`](../../doc/models/register-callback-request.md) | Body, Required | Request to register a callback. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [CallbackActionResult](../../doc/models/callback-action-result.md).

## Example Usage

```ts
const aname = 'TestAccount-2';

const body: RegisterCallbackRequest = {
  name: 'CarrierService',
  url: 'https://mock.thingspace.verizon.com/webhook',
};

try {
  const { result, ...httpResponse } = await connectivityCallbacksController.registerCallback(
  aname,
  body
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
  "accountName": "122333444-00002",
  "serviceName": "CarrierService"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Deregister Callback

Stops ThingSpace from sending callback messages for the specified account and service.

```ts
async deregisterCallback(
  aname: string,
  sname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CallbackActionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `sname` | `string` | Template, Required | Service name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [CallbackActionResult](../../doc/models/callback-action-result.md).

## Example Usage

```ts
const aname = '1223334444-00001';

const sname = 'CarrierService';

try {
  const { result, ...httpResponse } = await connectivityCallbacksController.deregisterCallback(
  aname,
  sname
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
  "accountName": "1223334444-00001",
  "serviceName": "CarrierService"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

