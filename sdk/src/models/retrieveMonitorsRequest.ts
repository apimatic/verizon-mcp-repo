/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AccountDeviceList,
  accountDeviceListSchema,
} from './accountDeviceList';

export interface RetrieveMonitorsRequest {
  /** The name of a billing account. */
  accountName: string;
  /** The devices for which you want to restore service, specified by device identifier. */
  devices: AccountDeviceList[];
  /** The name of a billing account. */
  monitorType?: string;
}

export const retrieveMonitorsRequestSchema: Schema<RetrieveMonitorsRequest> = object(
  {
    accountName: ['accountName', string()],
    devices: ['devices', array(lazy(() => accountDeviceListSchema))],
    monitorType: ['monitorType', optional(string())],
  }
);
