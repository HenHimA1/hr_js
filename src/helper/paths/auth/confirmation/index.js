export const confirmationAuth = {
  tags: ["Auth"],
  description: "Confirm user email",
  requestBody: {
    description: "Optional description in Markdown",
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/confirmationAuthModel" },
      },
      "application/xml": {
        schema: { $ref: "#/components/schemas/confirmationAuthModel" },
      },
      "application/x-www-form-urlencoded": {
        schema: { $ref: "#/components/schemas/confirmationAuthModel" },
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
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Email activate",
                  },
                },
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
