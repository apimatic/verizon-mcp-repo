/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { DeviceIdSearch, deviceIdSearchSchema } from './deviceIdSearch';

/** Filter for a list of devices. */
export interface AccountDeviceListFilter {
  /** Specify the kind of the device identifier, the type of match, and the string that you want to match. */
  deviceIdentifierFilters: DeviceIdSearch[];
}

export const accountDeviceListFilterSchema: Schema<AccountDeviceListFilter> = object(
  {
    deviceIdentifierFilters: [
      'deviceIdentifierFilters',
      array(lazy(() => deviceIdSearchSchema)),
    ],
  }
);
