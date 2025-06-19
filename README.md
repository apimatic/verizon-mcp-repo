# ThingSpace Connectivity Management APILib MCP Server

## How to Build

1. Install Node.js version 22 or greater. Check version with `node --version`.
2. Open the command line in the current directory.
3. Run these commands in order:
```bash
cd ../sdk
npm install
cd ../server
npm install
```

## How to Run

### With Claude Desktop

If you are not familiar with how to setup MCP Servers with Claude Desktop, see [this tutorial](https://modelcontextprotocol.io/quickstart/user) first.

Now add something like this to your Claude Desktop config:

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "ThingSpace Connectivity Management APILib": {
      "command": "node",
      "args": ["[YOUR-PATH-HERE]/server/dist/index.js"],
      "env": {
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_ENVIRONMENT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_TIMEOUT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_V_ZM_2_M_TOKEN_2": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_O_AUTH_CLIENT_ID": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_O_AUTH_CLIENT_SECRET": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_V_ZM_2_M_TOKEN": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```

### With VS Code

You can also use VS Code to run the MCP Server. The configuration is similar to Claude Desktop. See [the official docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings) for details.

```json
// settings.json
{
  "mcp": {
    "servers": {
      "ThingSpace Connectivity Management APILib": {
        "type": "stdio",
        "command": "node",
        "args": ["[YOUR-PATH-HERE]/server/dist/index.js"],
        "env": {
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_ENVIRONMENT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_TIMEOUT": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_V_ZM_2_M_TOKEN_2": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_O_AUTH_CLIENT_ID": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_O_AUTH_CLIENT_SECRET": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
          "THING_SPACE_CONNECTIVITY_MANAGEMENT_API_LIB_V_ZM_2_M_TOKEN": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
        }
      }
    }
  }
}
```

## Important Notes

If any environment variable is omitted, a default value is used instead. If you're not sure what value to configure, it's better to omit it.

Before using the MCP Server, make sure to configure:
- The absolute path to the location where your MCP Server is stored
- Any authentication variables

Depending on the size of your API's request schemas, MCP Clients can exceed context limits very quickly. To prevent this, you may need to manually enable/disable the available tools. See [here](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_use-mcp-tools-in-agent-mode) for VS Code. If you get any strange errors, reducing the context this way may fix the problem.
