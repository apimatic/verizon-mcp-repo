
# Go to State Request

Changes the provisioning state of one or more devices to a specified customer-defined service and state.

## Structure

`GoToStateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceName` | `string` | Required | The name of a customer-defined service to push the devices to. |
| `stateName` | `string` | Required | The name of a customer-defined stage state to push the devices to. |
| `servicePlan` | `string` | Required | The service plan code that you want to assign to all specified devices in the new state. |
| `mdnZipCode` | `string` | Required | The Zip code of the location where the line of service will primarily be used, or a Zip code that you have been told to use with these devices. For accounts that are configured for geographic numbering, this is the ZIP code from which the MDN will be derived. |
| `devices` | [`AccountDeviceList[] \| undefined`](../../doc/models/account-device-list.md) | Optional | Up to 10,000 devices that you want to push to a different state, specified by device identifier. |
| `filter` | [`DeviceFilter \| undefined`](../../doc/models/device-filter.md) | Optional | Specify the kind of the device identifier, the type of match, and the string that you want to match. |
| `carrierIpPoolName` | `string \| undefined` | Optional | The pool from which your device IP addresses will be derived if the service or state change requires new IP addresses.If you do not include this element, the default pool will be used. |
| `publicIpRestriction` | `string \| undefined` | Optional | For devices with static IP addresses on the public network, this specifies whether the devices have general access to the Internet. Valid values are “restricted” or “unrestricted”. |
| `skuNumber` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. Can be used with ICCID or EID device identifiers in lieu of an IMEI when activating 4G devices. The SkuNumber will be used with all devices in the request, so all devices must be of the same type. |
| `customFields` | [`CustomFields[] \| undefined`](../../doc/models/custom-fields.md) | Optional | The names and values of any custom fields that you want to set for the devices. |
| `devicesWithServiceAddress` | `unknown[] \| undefined` | Optional | This is an array that associates an IP address with a device identifier. This variable is only relevant for Business Internet/Fixed Wireless Access |
| `ipAddress` | `string \| undefined` | Optional | The IP address of the device. |
| `groupName` | `string \| undefined` | Optional | The name of a device group that the devices should be added to. |
| `primaryPlaceOfUse` | [`PlaceOfUse \| undefined`](../../doc/models/place-of-use.md) | Optional | The customer name and the address of the device's primary place of use. Leave these fields empty to use the account profile address as the primary place of use. These values will be applied to all devices in the request.If the account is enabled for non-geographic MDNs and the device supports it, the primaryPlaceOfUse address will also be used to derive the MDN for the device. |

## Example (as JSON)

```json
{
  "devices": [
    {
      "deviceIds": [
        {
          "kind": "imei",
          "id": "990013907835573"
        },
        {
          "kind": "iccid",
          "id": "89141390780800784259"
        }
      ],
      "ipAddress": "ipAddress4"
    },
    {
      "deviceIds": [
        {
          "kind": "imei",
          "id": "990013907884259"
        },
        {
          "kind": "iccid",
          "id": "89141390780800735573"
        }
      ],
      "ipAddress": "ipAddress4"
    }
  ],
  "serviceName": "My Service",
  "stateName": "My State",
  "servicePlan": "87641",
  "mdnZipCode": "94203",
  "groupName": "4G West",
  "publicIpRestriction": "unrestricted",
  "primaryPlaceOfUse": {
    "customerName": {
      "title": "President",
      "firstName": "Zaffod",
      "lastName": "Beeblebrox"
    },
    "address": {
      "addressLine1": "1600 Pennsylvania Ave NW",
      "city": "Washington",
      "state": "DC",
      "zip": "20500",
      "country": "USA"
    }
  },
  "filter": {
    "account": "account4",
    "groupName": "groupName6",
    "servicePlan": "servicePlan6",
    "customFields": [
      {
        "key": "key0",
        "value": "value2"
      },
      {
        "key": "key0",
        "value": "value2"
      },
      {
        "key": "key0",
        "value": "value2"
      }
    ]
  },
  "carrierIpPoolName": "carrierIpPoolName8",
  "skuNumber": "skuNumber6"
}
```

