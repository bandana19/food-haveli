  import api from "./apilnstance";
  
  export const commonApi = {
    REGISTER: (payload) => api.post("/auth/sign-up", payload.data),
  };
  