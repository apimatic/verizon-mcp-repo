/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Response to a new, randomly generated password for the current username. */
export interface SessionResetPasswordResult {
  /** The new password for the username. */
  newPassword?: string;
}

export const sessionResetPasswordResultSchema: Schema<SessionResetPasswordResult> = object(
  { newPassword: ['newPassword', optional(string())] }
);
