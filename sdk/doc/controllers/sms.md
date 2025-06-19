# SMS

Exchange Short Message Service (SMS) messages with devices.

```ts
const sMSController = new SMSController(client);
```

## Class Name

`SMSController`

## Methods

* [Send SMS to Device](../../doc/controllers/sms.md#send-sms-to-device)
* [List Devices SMS Messages](../../doc/controllers/sms.md#list-devices-sms-messages)
* [Start Queued SMS Delivery](../../doc/controllers/sms.md#start-queued-sms-delivery)


# Send SMS to Device

The messages are queued on the ThingSpace Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.

```ts
async sendSMSToDevice(
  body: SMSSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceManagementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SMSSendRequest`](../../doc/models/sms-send-request.md) | Body, Required | Request to send SMS. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [DeviceManagementResult](../../doc/models/device-management-result.md).

## Example Usage

```ts
const body: SMSSendRequest = {
  accountName: '0000123456-00001',
  smsMessage: 'the body or text of the message itself',
  customFields: [
    {
      key: 'CustomField1',
      value: 'value of the field',
    }
  ],
  dataEncoding: 'optional 7 or 8-bit encoding',
  deviceIds: [
    {
      id: '20-digit ICCID',
      kind: 'iccid',
    }
  ],
  timeToLive: 'a000000010000000R',
};

try {
  const { result, ...httpResponse } = await sMSController.sendSMSToDevice(body);
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


# List Devices SMS Messages

When HTTP status is 202, a URL will be returned in the Location header of the form /sms/{aname}/history?next={token}. This URL can be used to request the next set of messages.

```ts
async listDevicesSMSMessages(
  aname: string,
  next?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SMSMessagesQueryResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `next` | `bigint \| undefined` | Query, Optional | Continue the previous query from the URL in Location Header. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [SMSMessagesQueryResult](../../doc/models/sms-messages-query-result.md).

## Example Usage

```ts
const aname = '0252012345-00001';

try {
  const { result, ...httpResponse } = await sMSController.listDevicesSMSMessages(aname);
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
  "messages": [
    {
      "deviceIds": [
        {
          "id": "09623489171",
          "kind": "esn"
        }
      ],
      "message": "testmessage1",
      "timestamp": "2016-01-01T12:29:49-08:00"
    },
    {
      "deviceIds": [
        {
          "id": "09623489171",
          "kind": "esn"
        }
      ],
      "message": "testmessage2",
      "timestamp": "2016-01-01T12:31:02-08:00"
    }
  ],
  "hasMoreData": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Start Queued SMS Delivery

Tells the ThingSpace Platform to start sending mobile-originated SMS messages through the EnhancedConnectivityService callback service. SMS messages from devices are queued until they are retrieved by your application, either by callback or synchronously with GET /sms/{accountName}/history.

```ts
async startQueuedSMSDelivery(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectivityManagementSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ConnectivityManagementSuccessResult](../../doc/models/connectivity-management-success-result.md).

## Example Usage

```ts
const aname = '0252012345-00001';

try {
  const { result, ...httpResponse } = await sMSController.startQueuedSMSDelivery(aname);
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
  "success": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

