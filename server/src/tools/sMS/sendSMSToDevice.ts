/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, string, validateAndMap } from '@apimatic/schema';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import {
  deviceManagementResultSchema,
  sMSSendRequestSchema,
  type DeviceManagementResult,
  type SMSSendRequest,
} from 'sdksio-verizon-apis-sdk';
import { schemas } from '../../schema.js';
import { sMSController } from '../../sdk-client.js';
import { createErrorMessage, stringifyRawJson } from '../../utils.js';
import { type ToolDefinition } from '../index.js';


interface SendSMSToDeviceMCPToolRequest {
  'body': SMSSendRequest,
}

const sendSMSToDeviceMCPToolRequestSchema = object({
  body: ['body', lazy(() => sMSSendRequestSchema)],
});

async function handleSendSMSToDevice(
  args: unknown | SendSMSToDeviceMCPToolRequest
): Promise<CallToolResult> {
  const mappingResult = validateAndMap(args as any, sendSMSToDeviceMCPToolRequestSchema);
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
    const response = await sMSController.sendSMSToDevice(mappingResult.result['body']);
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

export async function sMSSendSMSToDeviceTool(): Promise<ToolDefinition> {
  return {
    tool: {
      name: "sMS-sendSMSToDevice",
      description: `The messages are queued on the ThingSpace Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.`,
      inputSchema: await schemas.loadSchema("SMS", "SendSMSToDevice"),
    },
    handler: handleSendSMSToDevice,
  };
}

