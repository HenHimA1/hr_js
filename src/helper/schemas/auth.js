export const loginAuthSchema = {
  LoginAuthModel: {
    type: "object",
    properties: {
      email: {
        type: "string",
        description: "The Email User",
        required: true,
      },
      password: {
        type: "string",
        description: "The Password User",
        required: true,
      },
    },
    example: {
      email: "admin@mycompany.com",
      password: "mycompany",
    },
  },
};

export const registerCompanyAuthSchema = {
  RegisterCompanyAuthModel: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The Name Company",
        required: true,
      },
      email: {
        type: "string",
        description: "The Email Company",
        required: true,
      },
      password: {
        type: "string",
        description: "The Password Company",
        required: true,
      },
    },
    example: {
      name: "mycompany",
      email: "admin@mycompany.com",
      password: "mycompany",
    },
  },
};

export const registerEmployeeAuthSchema = {
  RegisterEmployeeAuthModel: {
    type: "object",
    properties: {
      company_code: {
        type: "string",
        description: "The Name Company",
        required: true,
      },
      name: {
        type: "string",
        description: "The Name Company",
        required: true,
      },
      email: {
        type: "string",
        description: "The Email Company",
        required: true,
      },
      password: {
        type: "string",
        description: "The Password Company",
        required: true,
      },
    },
    example: {
      company_code: "184B450ADEC",
      name: "staff",
      email: "staff@mycompany.com",
      password: "staff",
    },
  },
};

export const tokenAuthSchema = {
  TokenAuthModel: {
    type: "object",
    properties: {
      token: {
        type: "string",
        description: "The Token User",
        required: true,
      },
    },
    example: {
      token:
        "admin@eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwidXNlcl90eXBlIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiYWN0aXZlIjoiZGVmYXVsdCIsIl9pZCI6ImluaXQiLCJjcmVhdGVfZGF0ZSI6ImluaXQiLCJfX3YiOiJpbml0IiwiY29tcGFueV9pZCI6ImluaXQifSwic3RhdGVzIjp7InJlcXVpcmUiOnt9LCJkZWZhdWx0Ijp7ImFjdGl2ZSI6dHJ1ZX0sImluaXQiOnsiX2lkIjp0cnVlLCJuYW1lIjp0cnVlLCJ1c2VyX3R5cGUiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiY3JlYXRlX2RhdGUiOnRydWUsIl9fdiI6dHJ1ZSwiY29tcGFueV9pZCI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2MzZjNWE3ODM1NWQ4Zjc5NDYwODdlZGEiLCJuYW1lIjoiQWRtaW4gTXkgQ29tcGFueSIsInVzZXJfdHlwZSI6ImNsaWVudCIsImVtYWlsIjoiYWRtaW5AbXljb21wYW55LmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDYyZURnenFKamMwV0dOQjdSZzF5Si5hVVJRSmxRWVc4SE1BYldtM0h4aTVBUnlmZXRWVURPIiwiY3JlYXRlX2RhdGUiOiIwODo1NzoxMiAxMC0xMS0yMDIyIiwiX192IjowLCJjb21wYW55X2lkIjoiNjM2YzVhN2MzNTVkOGY3OTQ2MDg3ZWRjIn0sImlhdCI6MTY2OTQ2MTIzOSwiZXhwIjoxNjY5NjM0MDM5fQ.dVJdoB0S1FRYqCC66Tw6tjVBi19dBSO8iiLcpORCwvs",
    },
  },
};
