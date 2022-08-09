import React from "react";

export const ParentComponent = () => {
  const users = [
    {
      name: "mariam",
      lastName: "liparteliani",
      age: 24,
      id: 1,
    },
    {
      name: "nana",
      lastName: "liparteliani",
      age: 20,
      id: 2,
    },
    {
      name: "nino",
      lastName: "liparteliani",
      age: 26,
      id: 3,
    },
  ];

  const isUserloggedIn = true;

  if (isUserloggedIn) {
    return (
      <div>
        {users.map((user) => (
          <div>
            {user.name} {user.lastName} {user.age}
          </div>
        ))}
      </div>
    );
  } else if (users.length === 0) {
    return " no users in the system.";
  } else if (isUserloggedIn === false) {
    return "you are not authorized to see user list";
  }

  return (
    <div>
      <ChildComponent usersArr={users} isUserloggedIn={isUserloggedIn} />
    </div>
  );
};

export default ParentComponent;

const ChildComponent = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1> Hi, I am child element</h1>
    </div>
  );
};

//აქ ვეღარ მივხვდი ჩაილლდკომპონენტმა როგორ უნდა დაარენდეოროს :დდ
