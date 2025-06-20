/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomFields, customFieldsSchema } from './customFields';

/** Specify the kind of the device identifier, the type of match, and the string that you want to match. */
export interface DeviceFilter {
  /** The the billing account that the devices belong to. */
  account?: string;
  /** Only include devices that are in this device group. */
  groupName?: string;
  /** Only include devices that have this service plan. */
  servicePlan?: string;
  /** Custom field names and values, if you want to only include devices that have matching values. */
  customFields?: CustomFields[];
}

export const deviceFilterSchema: Schema<DeviceFilter> = object({
  account: ['account', optional(string())],
  groupName: ['groupName', optional(string())],
  servicePlan: ['servicePlan', optional(string())],
  customFields: [
    'customFields',
    optional(array(lazy(() => customFieldsSchema))),
  ],
});
