/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, string, validateAndMap } from '@apimatic/schema';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import {
  deviceUploadRequestSchema,
  requestResponseSchema,
  type RequestResponse,
  type DeviceUploadRequest,
} from 'sdksio-verizon-apis-sdk';
import { schemas } from '../../schema.js';
import { deviceManagementController } from '../../sdk-client.js';
import { createErrorMessage, stringifyRawJson } from '../../utils.js';
import { type ToolDefinition } from '../index.js';


interface DeviceUploadMCPToolRequest {
  'body': DeviceUploadRequest,
}

const deviceUploadMCPToolRequestSchema = object({
  body: ['body', lazy(() => deviceUploadRequestSchema)],
});

async function handleDeviceUpload(
  args: unknown | DeviceUploadMCPToolRequest
): Promise<CallToolResult> {
  const mappingResult = validateAndMap(args as any, deviceUploadMCPToolRequestSchema);
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
    const response = await deviceManagementController.deviceUpload(mappingResult.result['body']);
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

export async function deviceManagementDeviceUploadTool(): Promise<ToolDefinition> {
  return {
    tool: {
      name: "deviceManagement-deviceUpload",
      description: `Upload a device record`,
      inputSchema: await schemas.loadSchema("Device Management", "DeviceUpload"),
    },
    handler: handleDeviceUpload,
  };
}

