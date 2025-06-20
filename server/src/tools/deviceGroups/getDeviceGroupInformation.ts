/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  object,
  optional,
  string,
  validateAndMap,
} from '@apimatic/schema';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import {
  deviceGroupDevicesDataSchema,
  type DeviceGroupDevicesData,
} from 'sdksio-verizon-apis-sdk';
import { schemas } from '../../schema.js';
import { deviceGroupsController } from '../../sdk-client.js';
import { createErrorMessage, stringifyRawJson } from '../../utils.js';
import { type ToolDefinition } from '../index.js';


interface GetDeviceGroupInformationMCPToolRequest {
  'aname': string,
  'gname': string,
  'next': bigint,
}

const getDeviceGroupInformationMCPToolRequestSchema = object({
  aname: ['aname', string()],
  gname: ['gname', string()],
  next: ['next', optional(bigint())],
});

async function handleGetDeviceGroupInformation(
  args: unknown | GetDeviceGroupInformationMCPToolRequest
): Promise<CallToolResult> {
  const mappingResult = validateAndMap(args as any, getDeviceGroupInformationMCPToolRequestSchema);
  if (mappingResult.errors) {
    return {
      content: mappingResult.errors.map(error => ({
        type: "text",
        text: stringifyRawJson(error)
      })),
      isError: true,
    };
  }

  try {
    const response = await deviceGroupsController.getDeviceGroupInformation(
      mappingResult.result['aname'],
      mappingResult.result['gname'],
      mappingResult.result['next']
    );
    return {
      content: [
        {
          type: "text",
          text: stringifyRawJson({
            statusCode: response.statusCode,
            responseHeaders: response.headers,
            result: response.body
          }),
        },
      ],
    };
  } catch (error) {
    return createErrorMessage(error);
  }
}

export async function deviceGroupsGetDeviceGroupInformationTool(): Promise<ToolDefinition> {
  return {
    tool: {
      name: "deviceGroups-getDeviceGroupInformation",
      description: `When HTTP status is 202, a URL will be returned in the Location header of the form /groups/{aname}/name/{gname}/?next={token}. This URL can be used to request the next set of groups.`,
      inputSchema: await schemas.loadSchema("Device Groups", "GetDeviceGroupInformation"),
    },
    handler: handleGetDeviceGroupInformation,
  };
}

