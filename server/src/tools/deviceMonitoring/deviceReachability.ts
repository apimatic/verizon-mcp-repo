/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, string, validateAndMap } from '@apimatic/schema';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import {
  notificationReportRequestSchema,
  requestResponseSchema,
  type RequestResponse,
  type NotificationReportRequest,
} from 'sdksio-verizon-apis-sdk';
import { schemas } from '../../schema.js';
import { deviceMonitoringController } from '../../sdk-client.js';
import { createErrorMessage, stringifyRawJson } from '../../utils.js';
import { type ToolDefinition } from '../index.js';


interface DeviceReachabilityMCPToolRequest {
  'body': NotificationReportRequest,
}

const deviceReachabilityMCPToolRequestSchema = object({
  body: ['body', lazy(() => notificationReportRequestSchema)],
});

async function handleDeviceReachability(
  args: unknown | DeviceReachabilityMCPToolRequest
): Promise<CallToolResult> {
  const mappingResult = validateAndMap(args as any, deviceReachabilityMCPToolRequestSchema);
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
    const response = await deviceMonitoringController.deviceReachability(mappingResult.result['body']);
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

export async function deviceMonitoringDeviceReachabilityTool(): Promise<ToolDefinition> {
  return {
    tool: {
      name: "deviceMonitoring-deviceReachability",
      inputSchema: await schemas.loadSchema("Device Monitoring", "DeviceReachability"),
    },
    handler: handleDeviceReachability,
  };
}

