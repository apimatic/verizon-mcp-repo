
# Uploads Activates Device Request

The request body identifies the devices to upload.

## Structure

`UploadsActivatesDeviceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of a billing account. An account name is usually numeric, and must include any leading zeros. |
| `emailAddress` | `string` | Required | The email address that the report should be sent to when the upload is complete. |
| `deviceSku` | `string` | Required | The stock keeping unit that identifies the type of devices in the upload and activation. |
| `uploadType` | `string` | Required | The format of the device identifiers in the upload and activation. |
| `servicePlan` | `string` | Required | The service plan code that you want to assign to all specified devices. |
| `carrierIpPoolName` | `string \| undefined` | Optional | The pool from which your device IP addresses is derived. |
| `mdnZipCode` | `string` | Required | The Zip code of the location where the line of service is primarily used, or a Zip code that you have been told to use with these devices. |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | The devices to upload, specified by device IDs in a format matching uploadType. |

## Example (as JSON)

```json
{
  "accountName": "1223334444-00001",
  "emailAddress": "bob@mycompany.com",
  "deviceSku": "VZW123456",
  "uploadType": "IMEI ICCID Pair",
  "servicePlan": "15MBShr",
  "carrierIpPoolName": "The carrier pool name",
  "mdnZipCode": "92222",
  "devices": [
    {
      "deviceIds": [
        {
          "id": "id0",
          "kind": "kind8"
        }
      ]
    }
  ]
}
```

