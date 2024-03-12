import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmpList = () => {
  let [empList, setEmpList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then((data) => setEmpList(data))
      .catch((err) => alert(err));
  }, []);

  let naviagate = useNavigate();

  let editEmployee = (id) => {
    naviagate("employee/create/" + id);
  };

  let deleteEmployee = (id) => {
    fetch("http://localhost:8000/employees/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Deleted Successfully",
          icon: "success",
        });
        window.location.reload();
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      );
  };

  let aboutEmployee = (id) => {
    naviagate("employee/about/" + id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-center">
          <h1> Employees List </h1>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <Link to="employee/create" className="btn btn-success">
              {" "}
              Add +{" "}
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className=" table-primary text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {empList &&
                empList.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>
                      <button
                        onClick={() => editEmployee(emp.id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => aboutEmployee(emp.id)}
                        className="btn btn-success"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpList;
