  import api from "./apilnstance";
  
  export const commonApi = {
    REGISTER: (payload) => api.post("/users/register", payload.data),
    LOGIN:(payload) => api.post("/auth/login", payload.data),
    GET_USER:()=>api.get("/users/profile")
  };
  