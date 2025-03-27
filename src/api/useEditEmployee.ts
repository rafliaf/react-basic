import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditEmployee = () => {
  // isloading
  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);

  // PATCH => mengganti beberapa field data
  // PUT => mengganti keseluruhan field data

  // edit employee
  const [editEmployeeError, setEditEmployeeError] = useState("");

  const editEmployee = async (
    employeeId: string,
    payload: {
      name?: string;
      job?: string;
    }
  ) => {
    try {
      setEditEmployeeIsLoading(true);
      await axiosInstance.patch(`/employees/${employeeId}`, {
        name: payload.name ? payload.name : undefined,
        job: payload.job ? payload.job : undefined,
      });
    } catch (error) {
      setEditEmployeeError((error as TypeError).message);
    } finally {
      setEditEmployeeIsLoading(false);
    }
  };

  return {
    editEmployee,
    editEmployeeError,
    editEmployeeIsLoading,
  };
};
