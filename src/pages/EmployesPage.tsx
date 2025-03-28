import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useEditEmployee } from "../api/useEditEmployee";

const EmployeesPage = () => {
  // handle input
  const [inputText, setInputText] = useState("");

  // GET
  // call function fetch data from useFetchEmployees.ts
  const { fetchEmployees, data, errorMessage, isLoading } = useFetchEmployees();

  // POST
  // call useCreateEmployee.ts
  const { createEmployee, createEmployeeError, createEmployeeIsLoading } = useCreateEmployee();

  // PUT & PATCH
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [editTextInput, setEditTextInput] = useState("");

  const [editJobTextInput, setEditJobTextInput] = useState("");

  const { editEmployee, editEmployeeError, editEmployeeIsLoading } = useEditEmployee();

  const handleEditEmployee = async () => {
    if (selectedEmployeeId && (editTextInput || editJobTextInput)) {
      await editEmployee(selectedEmployeeId, {
        name: editTextInput,
        job: editJobTextInput,
      });
      await fetchEmployees();

      setSelectedEmployeeId("");
      setEditTextInput("");
      setEditJobTextInput("");
    }
  };

  // DELETE
  const { deleteEmployee, deleteEmployeeError, deleteEmployeeIsLoading } = useDeleteEmployee();

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  // function agar setelah post data langsung otomatis (fetch data) ke tambah ke tabel
  const handleCreateEmployee = async () => {
    await createEmployee(inputText);
    await fetchEmployees();

    // habis POST data input ke reset
    setInputText("");
  };

  return (
    <div>
      <h1>Employees Pages</h1>
      <button disabled={isLoading} onClick={fetchEmployees}>
        Fetch Employees Data
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Aksi Delete</th>
            <th>Aksi Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(employee.id)} disabled={deleteEmployeeIsLoading}>
                    Delete
                  </button>
                </td>
                <td>
                  <input
                    checked={employee.id === selectedEmployeeId}
                    onChange={() => {
                      setSelectedEmployeeId(employee.id);
                      setEditTextInput(employee.name);
                      setEditJobTextInput(employee.job);
                    }}
                    type="radio"
                    name="employee-edit"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
            </td>
            <td>
              <button onClick={handleCreateEmployee} disabled={createEmployeeIsLoading}>
                Create employee
              </button>
            </td>
          </tr>

          {/* isloading error */}
          <tr>{createEmployeeIsLoading && <p>Loading create data...</p>}</tr>
          {/* handle error POST data */}
          <tr>
            {createEmployeeError && (
              <tr>
                <td colSpan={3} style={{ color: "red" }}>
                  {createEmployeeError}
                </td>
              </tr>
            )}
          </tr>

          <tr>
            <td colSpan={2}>
              <input type="text" onChange={(e) => setEditTextInput(e.target.value)} value={editTextInput} />
            </td>
            <td>
              <input type="text" value={editJobTextInput} onChange={(e) => setEditJobTextInput(e.target.value)} />
            </td>
            <td>
              <button onClick={handleEditEmployee} disabled={editEmployeeIsLoading || !selectedEmployeeId}>
                Update employee
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      {/* cek selected employeeId */}
      {/* <h3>{selectedEmployeeId}</h3> */}

      {/* versi lebih singkat ternary */}
      {isLoading && <p>Loading fetch data...</p>}
      {/* {employeeIsLoading ? <p>Loading fetch data...</p> : null} */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {deleteEmployeeIsLoading && <p>Loading delete data...</p>}
    </div>
  );
};

export default EmployeesPage;
