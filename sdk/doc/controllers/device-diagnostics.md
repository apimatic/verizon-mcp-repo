# Device Diagnostics

```ts
const deviceDiagnosticsController = new DeviceDiagnosticsController(client);
```

## Class Name

`DeviceDiagnosticsController`

## Methods

* [Device Reachability Status Using POST](../../doc/controllers/device-diagnostics.md#device-reachability-status-using-post)
* [Retrieve Active Monitors Using POST](../../doc/controllers/device-diagnostics.md#retrieve-active-monitors-using-post)


# Device Reachability Status Using POST

If the devices do not already exist in the account, this API resource adds them before activation.

```ts
async deviceReachabilityStatusUsingPOST(
  body: NotificationReportStatusRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NotificationReportStatusRequest`](../../doc/models/notification-report-status-request.md) | Body, Required | Retrieve Reachability Report Status for a device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [DeviceManagementResult](../../doc/models/device-management-result.md).

## Example Usage

```ts
const body: NotificationReportStatusRequest = {
  accountName: '0868924207-00001',
  device: {
    id: '990013907835573',
    kind: 'imei',
  },
  requestType: 'requestType6',
};

try {
  const { result, ...httpResponse } = await deviceDiagnosticsController.deviceReachabilityStatusUsingPOST(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Retrieve Active Monitors Using POST

Retrieve all the active monitors.

```ts
async retrieveActiveMonitorsUsingPOST(
  body: RetrieveMonitorsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RetrieveMonitorsRequest`](../../doc/models/retrieve-monitors-request.md) | Body, Required | Retrieve Monitor Request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [DeviceManagementResult](../../doc/models/device-management-result.md).

## Example Usage

```ts
const body: RetrieveMonitorsRequest = {
  accountName: '0242123520-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '12016560696',
          kind: 'msisdn',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceDiagnosticsController.retrieveActiveMonitorsUsingPOST(body);
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
  "requestId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

