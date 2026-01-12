import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const user = JSON.parse(localStorage.getItem("emp"));

  // console.log(user);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const naviget = useNavigate();
  const foundUser = async (e) => {
    e.preventDefault();
    const findUser = await user.find((e) => {
      return e.email === userEmail && e.password === userPassword;
    });
    if (findUser) {
      setLoggedInUser(findUser);
      naviget("/dashbord", {
        state: { user: findUser },
      });
    } else {
      alert("User not found");
    }
  };

  console.log(loggedInUser);

  return (
    <div className="w-full h-screen bg-[#06070a] flex flex-col items-center justify-center ">
      <form
        onSubmit={(e) => foundUser(e)}
        className=" bg-[#faf5ee] flex items-center justify-center flex-col gap-4 p-4 rounded-[10px] text-[#06070a] "
      >
        <Link
          to={"/register"}
          className="text-[#faf5ee] bg-[#06070a] px-4 py-3 w-full text-center rounded-[5px] text-[1.5rem] "
        >
          Register
        </Link>
        <h1 className="text-[2rem] font-semibold ">Login</h1>
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="border text-2xl rounded-[10px] px-4 py-2 placeholder:text-[#06070a91] "
        />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="text"
          placeholder="Enter password"
          className="border text-2xl rounded-[10px] px-4 py-2 placeholder:text-[#06070a91] border border-[#06070a] "
        />
        <input type="submit" className="bg-[green] px-6 py-2 rounded-[5px] " />
      </form>
    </div>
  );
};

export default Login;
