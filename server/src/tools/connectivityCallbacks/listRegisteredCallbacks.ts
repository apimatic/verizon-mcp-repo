/**
 * ThingSpace Connectivity Management APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, string, validateAndMap } from '@apimatic/schema';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import {
  connectivityManagementCallbackSchema,
  type ConnectivityManagementCallback,
} from 'sdksio-verizon-apis-sdk';
import { schemas } from '../../schema.js';
import { connectivityCallbacksController } from '../../sdk-client.js';
import { createErrorMessage, stringifyRawJson } from '../../utils.js';
import { type ToolDefinition } from '../index.js';


interface ListRegisteredCallbacksMCPToolRequest {
  'aname': string,
}

const listRegisteredCallbacksMCPToolRequestSchema = object({
  aname: ['aname', string()],
});

async function handleListRegisteredCallbacks(
  args: unknown | ListRegisteredCallbacksMCPToolRequest
): Promise<CallToolResult> {
  const mappingResult = validateAndMap(args as any, listRegisteredCallbacksMCPToolRequestSchema);
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
    const response = await connectivityCallbacksController.listRegisteredCallbacks(
      mappingResult.result['aname']
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

export async function connectivityCallbacksListRegisteredCallbacksTool(): Promise<ToolDefinition> {
  return {
    tool: {
      name: "connectivityCallbacks-listRegisteredCallbacks",
      description: `Returns the name and endpoint URL of the callback listening services registered for a given account.`,
      inputSchema: await schemas.loadSchema("Connectivity Callbacks", "ListRegisteredCallbacks"),
    },
    handler: handleListRegisteredCallbacks,
  };
}

