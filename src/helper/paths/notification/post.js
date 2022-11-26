export const postNotification = {
    tags: ["Notification"],
    description: "List of all notification",
    requestBody: {
        description: "Optional description in Markdown",
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CreateNotificationModel" },
          },
          "application/xml": {
            schema: { $ref: "#/components/schemas/CreateNotificationModel" },
          },
          "application/x-www-form-urlencoded": {
            schema: { $ref: "#/components/schemas/CreateNotificationModel" },
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
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/NotificationModel",
                  },
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
  