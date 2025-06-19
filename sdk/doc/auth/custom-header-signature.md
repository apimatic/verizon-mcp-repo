
# Custom Header Signature



Documentation for accessing and setting credentials for VZ-M2M-Token.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| VZ-M2M-Token | `string` | M2M Session Token ([How to generate an M2M session token?](../../doc/controllers/session-management.md#start-connectivity-management-session)) | `vZM2MToken` |



**Note:** Auth credentials can be set using `vZM2MTokenCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  vZM2MTokenCredentials: {
    'VZ-M2M-Token': 'VZ-M2M-Token'
  },
});
```


