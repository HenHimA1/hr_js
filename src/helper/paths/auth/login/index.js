export const loginAuth = {
  tags: ["Auth"],
  description: "List of all notification",
  requestBody: {
    description: "Optional description in Markdown",
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/LoginAuthModel" },
      },
      "application/xml": {
        schema: { $ref: "#/components/schemas/LoginAuthModel" },
      },
      "application/x-www-form-urlencoded": {
        schema: { $ref: "#/components/schemas/LoginAuthModel" },
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
