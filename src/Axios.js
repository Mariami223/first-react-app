import React, { useEffect } from "react";
import Validation from "./Validation";
// import { instance } from "./instance";
import axios from "axios";

// const userData = {
//   firstName: "mariam",
//   lastName: "liparteliani",
//   age: 24,
//   email: "marinaliparteliani22@hmail.com",
//   sex: "female",
// };

const AxiosComponent = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then(({ data }) => console.log("data", data));
  }, []);
  return <div>AxiosComponent</div>;
};

export default AxiosComponent;
