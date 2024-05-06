import axios from "axios";
import { produce } from "immer";
import { create } from "zustand";

interface ProductType {
  id: string;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
  owner_email: string;
}

const ProductStore = (set: (produce: () => void) => void) => ({
  products: [] as ProductType[],
  getProducts: async () => {
    try {
      const res = await axios.get(
        "https://app.olimjanov.uz/v1/service/get-all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await res.data;
      set(
        produce((state: any) => {
          state.products = data;
        })
      );
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  },
  search: async () => {
    try {
      const res = await axios.get(
        "https://app.olimjanov.uz/v1/service/search",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await res.data;
      set(
        produce((state: any) => {
          state.products = data;
        })
      );
    } catch (error: any) {
      console.log(error.message);
    }
  },
  update: async () => {
    {
      try {
        const res = await axios.post(
          "https://app.olimjanov.uz/v1/service/update",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        const data = await res.data;
        set(
          produce((state: any) => {
            state.products = data;
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  },
});

export const useAllServices = create(ProductStore);
