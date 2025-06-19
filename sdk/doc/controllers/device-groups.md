# Device Groups

```ts
const deviceGroupsController = new DeviceGroupsController(client);
```

## Class Name

`DeviceGroupsController`

## Methods

* [Create Device Group](../../doc/controllers/device-groups.md#create-device-group)
* [List Device Groups](../../doc/controllers/device-groups.md#list-device-groups)
* [Get Device Group Information](../../doc/controllers/device-groups.md#get-device-group-information)
* [Update Device Group](../../doc/controllers/device-groups.md#update-device-group)
* [Delete Device Group](../../doc/controllers/device-groups.md#delete-device-group)


# Create Device Group

Create a new device group and optionally add devices to the group. Device groups can make it easier to manage similar devices and to get reports on their usage.

```ts
async createDeviceGroup(
  body: CreateDeviceGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectivityManagementSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateDeviceGroupRequest`](../../doc/models/create-device-group-request.md) | Body, Required | A request to create a new device group. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ConnectivityManagementSuccessResult](../../doc/models/connectivity-management-success-result.md).

## Example Usage

```ts
const body: CreateDeviceGroupRequest = {
  accountName: '0000123456-00001',
  groupDescription: 'descriptive string',
  groupName: 'group name',
  devicesToAdd: [
    {
      id: '15-digit IMEI',
      kind: 'imei',
    }
  ],
};

try {
  const { result, ...httpResponse } = await deviceGroupsController.createDeviceGroup(body);
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


# List Device Groups

Returns a list of all device groups in a specified account.

```ts
async listDeviceGroups(
  aname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceGroup[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [DeviceGroup[]](../../doc/models/device-group.md).

## Example Usage

```ts
const aname = '0252012345-00001';

try {
  const { result, ...httpResponse } = await deviceGroupsController.listDeviceGroups(aname);
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
    "name": "Unassigned Devices",
    "description": "All devices that are not in another device group.",
    "isDefaultGroup": true,
    "extendedAttributes": []
  },
  {
    "name": "West Coast Devices",
    "description": "",
    "isDefaultGroup": false,
    "extendedAttributes": []
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Get Device Group Information

When HTTP status is 202, a URL will be returned in the Location header of the form /groups/{aname}/name/{gname}/?next={token}. This URL can be used to request the next set of groups.

```ts
async getDeviceGroupInformation(
  aname: string,
  gname: string,
  next?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceGroupDevicesData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `gname` | `string` | Template, Required | Group name. |
| `next` | `bigint \| undefined` | Query, Optional | Continue the previous query from the pageUrl pagetoken. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [DeviceGroupDevicesData](../../doc/models/device-group-devices-data.md).

## Example Usage

```ts
const aname = '0252012345-00001';

const gname = 'gname2';

try {
  const { result, ...httpResponse } = await deviceGroupsController.getDeviceGroupInformation(
  aname,
  gname
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
  "name": "Nebraska Trucks",
  "description": "All service trucks in Nebraska.",
  "hasMoreData": false,
  "devices": [
    {
      "deviceIds": [
        {
          "id": "12345",
          "kind": "meid"
        },
        {
          "id": "54321",
          "kind": "mdn"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Update Device Group

Make changes to a device group, including changing the name and description, and adding or removing devices.

```ts
async updateDeviceGroup(
  aname: string,
  gname: string,
  body: DeviceGroupUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectivityManagementSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `gname` | `string` | Template, Required | Group name. |
| `body` | [`DeviceGroupUpdateRequest`](../../doc/models/device-group-update-request.md) | Body, Required | Request to update device group. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ConnectivityManagementSuccessResult](../../doc/models/connectivity-management-success-result.md).

## Example Usage

```ts
const aname = '0252012345-00001';

const gname = 'gname2';

const body: DeviceGroupUpdateRequest = {
  devicesToAdd: [
    {
      id: '990003420535537',
      kind: 'imei',
    }
  ],
  newGroupDescription: 'All western region tank level monitors.',
  newGroupName: 'Western region tanks',
};

try {
  const { result, ...httpResponse } = await deviceGroupsController.updateDeviceGroup(
  aname,
  gname,
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
  "success": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |


# Delete Device Group

Deletes a device group from the account. Devices in the group are moved to the default device group and are not deleted from the account.

```ts
async deleteDeviceGroup(
  aname: string,
  gname: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectivityManagementSuccessResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aname` | `string` | Template, Required | Account name. |
| `gname` | `string` | Template, Required | Group name. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ConnectivityManagementSuccessResult](../../doc/models/connectivity-management-success-result.md).

## Example Usage

```ts
const aname = '0252012345-00001';

const gname = 'gname2';

try {
  const { result, ...httpResponse } = await deviceGroupsController.deleteDeviceGroup(
  aname,
  gname
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
  "success": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response. | [`ConnectivityManagementResultError`](../../doc/models/connectivity-management-result-error.md) |

