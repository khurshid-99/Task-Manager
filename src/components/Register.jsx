import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UserDataContext } from "../context/UsersContext";
const Register = () => {
  const [usersData, setUsersData] = useContext(UserDataContext);
  // const [createUser, setCreateUser] = useState(user);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [task, setTask] = useState([]);
  // console.log(users);

  const navigate = useNavigate();
  const createEmploy = (e) => {
    e.preventDefault();
    console.log(userName, userEmail, userPassword);
    const id = uuidv4();
    const addNewUser = [
      ...usersData,
      {
        name: userName,
        email: userEmail,
        password: userPassword,
        id,
        task: task,
      },
    ];
    setUsersData(addNewUser);
    if (userName && userEmail && userPassword) navigate("/login");
  };

  console.log(usersData);

  return (
    <div className="w-full h-screen bg-[#06070a] flex flex-col items-center justify-center ">
      <form
        onSubmit={(e) => createEmploy(e)}
        className=" bg-[#faf5ee] flex items-center justify-center flex-col gap-4 p-4 rounded-[10px] text-[#06070a] "
      >
        <Link
          to={"/login"}
          className="text-[#faf5ee] bg-[#06070a] px-4 py-3 w-full text-center rounded-[5px] text-[1.5rem] "
        >
          Login
        </Link>
        <h1 className="text-[2rem] font-semibold ">Register</h1>
        <input
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="border text-2xl rounded-[10px] px-4 py-2 placeholder:text-[#06070a91] border border-[#06070a] "
        />
        <input
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="border text-2xl rounded-[10px] px-4 py-2 placeholder:text-[#06070a91] border border-[#06070a] "
        />
        <input
          required
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="text"
          placeholder="Enter password"
          className="border text-2xl rounded-[10px] px-4 py-2 "
        />
        <input
          type="submit"
          className="bg-[green] px-6 py-2 rounded-[5px] active:scale-[.95] "
        />
      </form>
    </div>
  );
};

export default Register;
