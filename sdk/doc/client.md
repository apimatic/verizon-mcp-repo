
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| vZM2MToken2 | `string` | M2M Session Token ([How to generate an M2M session token?](../doc/controllers/session-management.md#start-connectivity-management-session)) |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| thingspaceOauthCredentials | [`ThingspaceOauthCredentials`](auth/oauth-2-client-credentials-grant.md) | The credential object for thingspaceOauth |
| vZM2MTokenCredentials | [`VZM2MTokenCredentials`](auth/custom-header-signature.md) | The credential object for vZM2MToken |

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

## ThingSpace Connectivity Management API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| deviceManagement | Gets DeviceManagementController |
| accounts | Gets AccountsController |
| deviceGroups | Gets DeviceGroupsController |
| sMS | Gets SMSController |
| sessionManagement | Gets SessionManagementController |
| connectivityCallbacks | Gets ConnectivityCallbacksController |
| accountRequests | Gets AccountRequestsController |
| servicePlans | Gets ServicePlansController |
| deviceDiagnostics | Gets DeviceDiagnosticsController |
| deviceMonitoring | Gets DeviceMonitoringController |
| deviceProfileManagement | Gets DeviceProfileManagementController |
| eUICCDeviceProfileManagement | Gets EUICCDeviceProfileManagementController |
| oAuthAuthorization | Gets OAuthAuthorizationController |

