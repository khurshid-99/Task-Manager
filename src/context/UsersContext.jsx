import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();
const UsersContext = ({ children }) => {
  // localStorage.clear()

  const empData = localStorage.getItem("emp");
  const localStorageData = empData ? JSON.parse(empData) : [];
  const [usersData, setUsersData] = useState(localStorageData);

  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(usersData));
  }, [usersData]);

  return (
    <div>
      <UserDataContext.Provider value={[usersData, setUsersData]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UsersContext;
