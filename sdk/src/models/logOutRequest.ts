/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Request to end a Connectivity Management session. */
export interface LogOutRequest {
  /** The session token is returned to confirm that it was invalidated. */
  sessionToken?: string;
}

export const logOutRequestSchema: Schema<LogOutRequest> = object({
  sessionToken: ['sessionToken', optional(string())],
});
