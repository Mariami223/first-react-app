import "./App.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import AxiosComponent from "./Axios";

// const App = () => {
//   const [x, setX] = useState(0);
//   // const buttonClickHandler = () => {
//   //   console.log("button clicked");
//   // };

//   // const secondButtonClickhanlder = () => {
//   //   setX(x + 1);
//   //   console.log("second button clicked");
//   // };
//   const increment = (value) => {
//     setX(x + value);
//     console.log("button was cliked");
//   };

//   return (
//     <>
//       <button onClick={() => increment(5)}>on click</button>
//       <button onClick={() => increment(10)}> click me</button>
//       {x}
//     </>
//   );
// };

// const App = () => {
//   const [name, setName] = useState("");

//   const inputChangeHandler = (e) => {
//     console.log("input Changed", e);
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <input value={name} onChange={inputChangeHandler}></input>
//     </>
//   );
// };

// const App = () => {
//   const [country, setCountry] = useState("");

//   const handleSelectChange = (e) => {
//     console.log("input Changed", e);
//     setCountry(e.target.value);
//   };
//   console.log("country", country);

//   return (
//     <>
//       <select onChange={handleSelectChange} defaultValue={"usa"}>
//         <option value="georgia">georgia</option>
//         <option value="usa">usa</option>
//         <option value="uk">Uk</option>
//       </select>
//     </>
//   );
// };

// const App = () => {
//   const [country, setCountry] = useState("");
//   const handleCheckBoxChange = (e) => {
//     setCountry(e.target.value);
//   };
//   console.log("country", country);
//   return (
//     <>
//       <form>
//         <input
//           type="checkbox"
//           value={"georgia"}
//           onChange={handleCheckBoxChange}
//           checked={country === "georgia"}
//         />{" "}
//         georgia
//         <input
//           type="checkbox"
//           value={"usa"}
//           onChange={handleCheckBoxChange}
//           checked={country === "usa"}
//         />{" "}
//         usa
//         <input
//           type="checkbox"
//           value={"uk"}
//           onChange={handleCheckBoxChange}
//           checked={country === "uk"}
//         />{" "}
//         uk
//       </form>
//     </>
//   );
// };

// const App = () => {
//   const [userList, setUserList] = useState([]);
//   const [name, setname] = useState("");
//   const [age, setAge] = useState(0);

//   const saveUser = (e) => {
//     e.preventDefault();
//     const user = { name, age };
//     console.log(user);
//     setUserList((prevuserList) => [...prevuserList, user]);
//   };

//   return (
//     <>
//       <form onSubmit={saveUser}>
//         <label>
//           Enter Your name :
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//           ></input>
//         </label>
//         <label>
//           Enter Yourage:
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           ></input>
//         </label>
//         <button>save user</button>
//       </form>
//     </>
//   );
// };

// const App = () => {
//   const [userList, setUserList] = useState([]);
//   const [userData, setUserData] = useState({ name: "", age: 0 });

//   const saveUser = (e) => {
//     e.preventDefault();

//     console.log(userData);
//     setUserList((prevUserList) => [...prevUserList, userData]);
//   };

//   const handleInputChange = (e) => {
//     setUserData((prevUserData) => {
//       return {
//         ...prevUserData,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   return (
//     <>
//       <form onSubmit={saveUser}>
//         <label>
//           Enter Your name :
//           <input
//             type="text"
//             name="name"
//             value={userData.name}
//             onChange={handleInputChange}
//           ></input>
//         </label>
//         <label>
//           Enter Yourage:
//           <input
//             type="number"
//             name="age"
//             value={userData.age}
//             onChange={handleInputChange}
//           ></input>
//         </label>
//         <button>save user</button>
//       </form>
//     </>
//   );
// };

// const App = () => {
//   const [someState, setSomeState] = useState(0);
//   const myRef = useRef(0);

//   myRef.current += 1;

//   console.log(myRef);
//   return (
//     <div>
//       <button onClick={() => setSomeState((prevState) => prevState + 1)}>
//         click to cause render
//       </button>
//     </div>
//   );
// };

const App = () => {
  return <div>{<AxiosComponent />}</div>;
};

export default App;
