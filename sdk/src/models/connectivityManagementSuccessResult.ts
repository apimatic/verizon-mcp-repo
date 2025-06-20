/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

/** Response to successful request. */
export interface ConnectivityManagementSuccessResult {
  /** A value of “true” indicates that the device group was created successfully. */
  success?: boolean;
}

export const connectivityManagementSuccessResultSchema: Schema<ConnectivityManagementSuccessResult> = object(
  { success: ['success', optional(boolean())] }
);
