# Session Management

```ts
const sessionManagementController = new SessionManagementController(client);
```

## Class Name

`SessionManagementController`

## Methods

* [Start Connectivity Management Session](../../doc/controllers/session-management.md#start-connectivity-management-session)
* [End Connectivity Management Session](../../doc/controllers/session-management.md#end-connectivity-management-session)
* [Reset Connectivity Management Password](../../doc/controllers/session-management.md#reset-connectivity-management-password)


# Start Connectivity Management Session

Initiates a Connectivity Management session and returns a VZ-M2M session token that is required in subsequent API requests.

```ts
async startConnectivityManagementSession(
  body?: LogInRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LogInResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LogInRequest \| undefined`](../../doc/models/log-in-request.md) | Body, Optional | Request to initiate a session. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [LogInResult](../../doc/models/log-in-result.md).

## Example Usage

```ts
const body: LogInRequest = {
  username: 'zbeeblebrox',
  password: 'IMgr8',
};

try {
  const { result, ...httpResponse } = await sessionManagementController.startConnectivityManagementSession(body);
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
  "sessionToken": "bcce3ea6-fe4f-4952-bacf-eadd80718e83"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# End Connectivity Management Session

Ends a Connectivity Management session.

```ts
async endConnectivityManagementSession(
  requestOptions?: RequestOptions
): Promise<ApiResponse<LogOutRequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [LogOutRequest](../../doc/models/log-out-request.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sessionManagementController.endConnectivityManagementSession();
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
  "sessionToken": "bcce3ea6-fe4f-4952-bacf-eadd80718e83"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Reset Connectivity Management Password

The new password is effective immediately. Passwords do not expire, but Verizon recommends changing your password every 90 days.

```ts
async resetConnectivityManagementPassword(
  body: SessionResetPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionResetPasswordResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SessionResetPasswordRequest`](../../doc/models/session-reset-password-request.md) | Body, Required | Request with current password that needs to be reset. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [SessionResetPasswordResult](../../doc/models/session-reset-password-result.md).

## Example Usage

```ts
const body: SessionResetPasswordRequest = {
  oldPassword: 'grflbk',
};

try {
  const { result, ...httpResponse } = await sessionManagementController.resetConnectivityManagementPassword(body);
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
  "newPassword": "Wh0a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

