export const postNotification = {
    tags: ["Notification"],
    description: "List of all notification",
    requestBody: {
        description: "Optional description in Markdown",
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/createNotificationModel" },
          },
          "application/xml": {
            schema: { $ref: "#/components/schemas/createNotificationModel" },
          },
          "application/x-www-form-urlencoded": {
            schema: { $ref: "#/components/schemas/createNotificationModel" },
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
  