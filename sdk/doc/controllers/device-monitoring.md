# Device Monitoring

```ts
const deviceMonitoringController = new DeviceMonitoringController(client);
```

## Class Name

`DeviceMonitoringController`

## Methods

* [Device Reachability](../../doc/controllers/device-monitoring.md#device-reachability)
* [Stop Device Reachability](../../doc/controllers/device-monitoring.md#stop-device-reachability)


# Device Reachability

```ts
async deviceReachability(
  body: NotificationReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NotificationReportRequest`](../../doc/models/notification-report-request.md) | Body, Required | Create Reachability Report Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [RequestResponse](../../doc/models/request-response.md).

## Example Usage

```ts
const body: NotificationReportRequest = {
  accountName: '0000123456-00001',
  requestType: 'REACHABLE_FOR_DATA',
  devices: [
    {
      deviceIds: [
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
    }
  ],
  monitorExpirationTime: '2019-12-02T15:00:00-08:00Z',
};

try {
  const { result, ...httpResponse } = await deviceMonitoringController.deviceReachability(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |


# Stop Device Reachability

```ts
async stopDeviceReachability(
  stopreachabilitypayload: StopMonitorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `stopreachabilitypayload` | [`StopMonitorRequest`](../../doc/models/stop-monitor-request.md) | Query, Required | Payload for the Stop Device Reachability monitors request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [RequestResponse](../../doc/models/request-response.md).

## Example Usage

```ts
const stopreachabilitypayload: StopMonitorRequest = {
  accountName: '0000123456-00001',
  monitorIds: [
    '35596ca6-eeee-ffff-gggg-42b4fc2da54c'
  ],
};

try {
  const { result, ...httpResponse } = await deviceMonitoringController.stopDeviceReachability(stopreachabilitypayload);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error Response | [`RestErrorResponseError`](../../doc/models/rest-error-response-error.md) |

