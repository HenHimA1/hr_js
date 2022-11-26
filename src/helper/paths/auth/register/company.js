export const registerCompanyAuth = {
    tags: ["Auth"],
    description: "List of all notification",
    requestBody: {
      description: "Optional description in Markdown",
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/RegisterCompanyAuthModel" },
        },
        "application/xml": {
          schema: { $ref: "#/components/schemas/RegisterCompanyAuthModel" },
        },
        "application/x-www-form-urlencoded": {
          schema: { $ref: "#/components/schemas/RegisterCompanyAuthModel" },
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
      401: {
        description: "Error: Unauthorized",
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/ErrorResponse",
            },
          },
        },
      },
    },
  };
  