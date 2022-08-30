import React, { useEffect, useState } from "react";

import { instance } from "./instance";

const Validation = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sex: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isUserUpdating, setUserUpdating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUserUpdating) {
      await instance.put(`/users"${formValues.id}`, formValues);
    } else {
      await instance.post("/users", formValues);
    }
    const { data } = await instance.get("/users");
    setUserList(data.data);
    console.log(data);

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      sex: "",
      password: "",
    });
    setUserUpdating(false);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await instance.get("/users");
      setUserList(data.data);
    };
    getData();
  }, []);
  //  (ანუ თავიდანვე ჩაიტვირთება სია)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [formValues]);

  const update = (id) => {
    const user = userList.find((user) => user._id === id);
    setFormValues({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      sex: user.sex,
      id: id,
      password: user.password,
    });
  };

  const removeUser = async (id) => {
    await instance.delete(`/users/${id}`);
    const { data } = await instance.get("/users");
    setUserList(data.data);
    console.log("data", data);
  };

  const validate = (values) => {
    const errors = {};

    if (values.firstName && values.firstName.length < 4) {
      errors.firstName = "firstName should have at least 4 charachters";
    }
    if (values.lastName && values.lastName.length < 4) {
      errors.lastName = "lastName should have at least 4 charachters";
    }
    if (values.email && !values.email.includes("@")) {
      errors.email = "email should include @ ";
    }
    if (values.age && values.age < 18) {
      errors.age = "age must be minimum 18";
    }

    if (values.password && values.password.length < 6) {
      errors.password = "password should have at least 6 charachters ";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <select onChange={handleChange} name="sex" defaultValue={"Chose sex"}>
            <option name={"sex"} value={"Female"}>
              Female
            </option>
            <option name={"sex"} value={"Male"}>
              Male
            </option>
          </select>
          <div className="field">
            <label>firstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          {formErrors.firstName && <p>{formErrors.firstName}</p>}

          <div className="field">
            <label>lastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          {formErrors.lastName && <p>{formErrors.lastName}</p>}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && <p>{formErrors.email}</p>}
          <div className="field">
            <label>Age</label>
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={formValues.age}
              onChange={handleChange}
            />
          </div>
          {formErrors.age && <p>{formErrors.age}</p>}

          <div className="field">
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          {formErrors.password && <p>{formErrors.password}</p>}
          <button className="fluid ui button blue">Add</button>
          <p>
            {formValues.firstName} {formValues.lastName} {formValues.email}{" "}
            {formValues.age}
          </p>
        </div>
      </form>

      {userList.map((user) => {
        return (
          <React.Fragment key={user._id}>
            <h1>{user.firstName}</h1>
            <p>{user.age}</p>
            <button
              onClick={() => {
                update(user._id);
                setUserUpdating(true);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                removeUser(user._id);
              }}
            >
              Delete
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Validation;
