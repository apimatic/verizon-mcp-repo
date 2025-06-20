/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** IP pool that is available to the account. */
export interface IPPool {
  /** The name of the IP pool. */
  poolName?: string;
  /** The type of IP pool, such as “Static IP” or “Dynamic IP.” */
  poolType?: string;
  /** True if this is the default IP pool for the account. */
  isDefaultPool?: boolean;
}

export const iPPoolSchema: Schema<IPPool> = object({
  poolName: ['poolName', optional(string())],
  poolType: ['poolType', optional(string())],
  isDefaultPool: ['isDefaultPool', optional(boolean())],
});
