import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeResponse = {
  id: string;
  name: string;
  job: string;
};

export const useFetchEmployees = () => {
  // state
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [employeeIsLoading, setEmployeeIsLoading] = useState(false);

  // handle error
  const [employeeError, setEmployeeError] = useState("");

  // function
  const fetchEmployees = async () => {
    try {
      setEmployeeIsLoading(true); // loading on

      //   const response = await fetch("http://localhost:2000/employees", {
      //     method: "GET",
      //   });

      //   const responseJsonEmployees = (await response.json()) as EmployeeResponse[];\

      const response = await axiosInstance.get<EmployeeResponse[]>("/employees");
      console.log(response);

      setEmployees(response.data);

      //   setEmployees(responseJsonEmployees);
      //   console.log(responseJsonEmployees);
    } catch (error) {
      setEmployeeError((error as TypeError).message);
      //   alert("Gagal mendapatkan data employee");
    } finally {
      setEmployeeIsLoading(false); //setelah semua proses fetch data selesai jadi false (off)
    }
  };

  return {
    fetchEmployees,
    data: employees,
    isLoading: employeeIsLoading,
    errorMessage: employeeError,
  };
};
