import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
  // isloading
  const [createEmployeeIsLoading, setEmployeeIsLoading] = useState(false);

  // create employee
  const [createEmployeeError, setCreateEmployeeError] = useState("");

  const createEmployee = async (payload: string) => {
    try {
      setEmployeeIsLoading(true);
      await axiosInstance.post("/employees", {
        name: payload,
      });
    } catch (error) {
      setCreateEmployeeError((error as TypeError).message);
    } finally {
      setEmployeeIsLoading(false);
    }
  };

  return {
    createEmployee,
    createEmployeeError,
    createEmployeeIsLoading,
  };
};
