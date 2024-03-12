import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmpCreate = () => {
  let [id, setId] = useState();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let navigate = useNavigate();

  let handlePost = (e) => {
    e.preventDefault();

    let newEmployee = { name, email, phone };

    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Data Added Successfully",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-center">
          <h1> Create New Employee </h1>
        </div>
        <form className="container" onSubmit={handlePost}>
          <div className="form-group col-lg-12">
            <label className="form-label"> ID </label>
            <input
              className="form-control"
              value={id}
              disabled
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-12">
            <label className="form-label"> Name </label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-12">
            <label className="form-label"> Email </label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-12">
            <label className="form-label"> Phone </label>
            <input
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-success my-3 col-6">
              {" "}
              Save{" "}
            </button>
          </div>
        </form>
      </div>
      <Link to="/" className="btn btn-primary my-3">
        Back
      </Link>
    </div>
  );
};

export default EmpCreate;
