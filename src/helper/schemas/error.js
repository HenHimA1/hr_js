export const errorSchema = {
  ErrorResponse: {
    type: "object",
    properties: {
      status: {
        type: "string",
        description: "The status response",
      },
      data: {
        type: "string",
        description: "The data response",
      },
      message: {
        type: "string",
        description: "The message response",
      },
    },
    example: {
      status: "Error",
      data: null,
      message: "Unauthorized",
    },
  },
};
