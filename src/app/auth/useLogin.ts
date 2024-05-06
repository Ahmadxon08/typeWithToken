import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

// interface LoginState extends User {
//   phoneNumber: string;
//   fullName: string;
// }

const AuthStore = (set: (produce: () => void) => void) => ({
  email: "",
  fullName: "",
  phoneNumber: "",
  password: "",
  login: async (user: User) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/login",
        user
      );
      const data = await res.data;
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      // console.log(data);
      set(
        produce((state: any) => {
          state.email = data.email;
          state.password = data.password;
        })
      );
    } catch (error) {
      console.log(error);
    }
  },
});

export const useLogin = create(AuthStore);
