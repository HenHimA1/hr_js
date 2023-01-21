export const createAttendanceSchema = {
  CreateAttendanceModel: {
    type: "object",
    properties: {
      check_in: {
        type: "string",
        description: "The attendance check in",
        required: true,
      },
      check_out: {
        type: "string",
        description: "The attendance check out",
      },
      user_id: {
        type: "string",
        description: "The attendance user id",
      },
      latitude: {
        type: "number",
        description: "The attendance latitude",
      },
      longitude: {
        type: "number",
        description: "The attendance longitude",
      },
    },
    example: {
      check_in: "08:57:12 10-11-2022",
      check_out: "18:57:12 10-11-2022",
      user_id: "636c5a78355d8f7946087eda",
      latitude: -7.250445,
      longitude: 112.768845,
    },
  },
};

export const attendanceSchema = {
  AttendanceModel: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "The auto-generated id of the attendance",
        required: true,
      },
      check_in: {
        type: "string",
        description: "The attendance check in",
        required: true,
      },
      check_out: {
        type: "string",
        description: "The attendance check out",
      },
      create_date: {
        type: "string",
        description: "The attendance date create",
      },
      user_id: {
        type: "string",
        description: "The attendance user id",
      },
    },
    example: {
      _id: "636c5a7c355d8f7946087edc",
      check_in: "08:57:12 10-11-2022",
      check_out: "18:57:12 10-11-2022",
      create_date: "08:57:12 10-11-2022",
      user_id: "636c5a78355d8f7946087eda",
    },
  },
};
