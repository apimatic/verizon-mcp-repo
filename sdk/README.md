
# Getting Started with ThingSpace Connectivity Management API

## Introduction

The ThingSpace Connectivity Management API allows you to add and activate devices, check their status, monitor their usage, monitor their reachability for Data and SMS communication as well as their connection status, and perform other device connectivity management tasks through a RESTful API. You can use the API to add connectivity management to anything from small apps to enterprise software systems, such as enterprise resource planning (ERP), supply chain management and customer service management. The API provides a secure, standards-compliant REST interface to the web services at the ThingSpace Data Center. You can download the <a href="/content/dam/thingspace-portal/resources/documentation/swagger/m2m-all.json" download = "Connectivity_Management.json">JSON file here</a>.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install sdksio-verizon-apis-sdk@1.7.0
```

For additional package details, see the [Npm page for the sdksio-verizon-apis-sdk@1.7.0 npm](https://www.npmjs.com/package/sdksio-verizon-apis-sdk/v/1.7.0).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| vZM2MToken2 | `string` | M2M Session Token ([How to generate an M2M session token?](doc/controllers/session-management.md#start-connectivity-management-session)) |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| thingspaceOauthCredentials | [`ThingspaceOauthCredentials`](doc/auth/oauth-2-client-credentials-grant.md) | The credential object for thingspaceOauth |
| vZM2MTokenCredentials | [`VZM2MTokenCredentials`](doc/auth/custom-header-signature.md) | The credential object for vZM2MToken |

The API client can be initialized as follows:

```ts
const client = new Client({
  thingspaceOauthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  vZM2MTokenCredentials: {
    'VZ-M2M-Token': 'VZ-M2M-Token'
  },
  vZM2MToken2: 'VZ-M2M-Token',
  timeout: 0,
  environment: Environment.Production,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** |
| Mock | - |

## Authorization

This API uses the following authentication schemes.

* [`thingspace_oauth (OAuth 2 Client Credentials Grant)`](doc/auth/oauth-2-client-credentials-grant.md)
* [`VZ-M2M-Token (Custom Header Signature)`](doc/auth/custom-header-signature.md)

## List of APIs

* [Device Management](doc/controllers/device-management.md)
* [Device Groups](doc/controllers/device-groups.md)
* [Session Management](doc/controllers/session-management.md)
* [Connectivity Callbacks](doc/controllers/connectivity-callbacks.md)
* [Account Requests](doc/controllers/account-requests.md)
* [Service Plans](doc/controllers/service-plans.md)
* [Device Diagnostics](doc/controllers/device-diagnostics.md)
* [Device Monitoring](doc/controllers/device-monitoring.md)
* [Device Profile Management](doc/controllers/device-profile-management.md)
* [E UICC Device Profile Management](doc/controllers/e-uicc-device-profile-management.md)
* [Accounts](doc/controllers/accounts.md)
* [SMS](doc/controllers/sms.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

