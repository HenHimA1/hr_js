export const registerEmployeeAuth = {
    tags: ["Auth"],
    description: "List of all notification",
    requestBody: {
      description: "Optional description in Markdown",
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/RegisterEmployeeAuthModel" },
        },
        "application/xml": {
          schema: { $ref: "#/components/schemas/RegisterEmployeeAuthModel" },
        },
        "application/x-www-form-urlencoded": {
          schema: { $ref: "#/components/schemas/RegisterEmployeeAuthModel" },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "success",
                },
                data: {
                  $ref: "#/components/schemas/TokenAuthModel",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Error: Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/ErrorBadRequest",
            },
          },
        },
      },
    },
  };
  