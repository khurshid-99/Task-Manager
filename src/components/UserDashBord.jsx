import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UserDataContext } from "../context/UsersContext";
import Task from "./Task";
import CompleteTask from "./CompleteTask";
import AllTask from "./AllTask";
import AddTask from "./AddTask";
const UserDashBord = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let loggedUser = location.state?.user;
  // console.log(user);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (!loggedUser) {
      navigate("/register");
    } else {
      setUserData(loggedUser);
    }
  }, [loggedUser, navigate]);
  // console.log(userData);

  const [usersData, setUsersData] = useContext(UserDataContext);
  // console.log(users);
  // const [title, setTitle] = useState("");
  // const [desdescription, setDesdescription] = useState("");
  // const [markAs, setMarkAs] = useState(false);
  // const [completed, setCompleted] = useState(false);
  // const [category, setCategory] = useState("");
  // const [assignTime, setAssignTime] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    desdescription: "",
    category: "",
    assign: "",
    markAs: false,
    completed: false,
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    const updateUser = usersData.map((e) => {
      if (e.id === userData.id) {
        // console.log("data is true");
        return {
          ...e,
          task: [
            ...(e.task || []),
            {
              // title: title,
              // desdescription: desdescription,
              // markas: markAs,
              // completed: completed,
              // id: uuidv4(),
              // assign: assignTime,
              // category: category,
              ...formData,
              id: uuidv4(),
            },
          ],
        };
      } else {
        return e;
      }
    });

    // console.log(updateUser);
    setUsersData(updateUser);
    setFormData({
      title: "",
      desdescription: "",
      category: "",
      assign: "",
      markAs: false,
      completed: false,
    });
  };

  const currentUser = usersData.find((u) => {
    return u.id === userData.id;
  });
  const task = currentUser?.task || [];
  // console.log(task);

  const handleLogOut = () => {
    navigate("/login", { replace: true });
  };

  const handleToggleComplete = (taskId) => {
    const updateUser = usersData.map((user) => {
      if (user.id === userData.id) {
        return {
          ...user,
          task: user.task.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
        };
      }
      return user;
    });

    setUsersData(updateUser);
  };

  const handleMarkas = (markAsId) => {
    const updateMarkas = usersData.map((user) => {
      if (user.id === userData.id) {
        return {
          ...user,
          task: task.map((task) =>
            task.id === markAsId ? { ...task, markas: !task.markas } : task
          ),
        };
      }
      return user;
    });
    setUsersData(updateMarkas);
  };

  const handleDeletTask = (taskId) => {
    const updateUserTask = usersData.map((user) => {
      if (user.id === userData.id) {
        return {
          ...user,
          task: user.task.filter((task) => task.id !== taskId),
        };
      }
      return user;
    });
    setUsersData(updateUserTask);
  };

  return (
    <div className="w-full h-screen bg-[#06070a] text-[white] font-semibold p-8 flex flex-col gap-4 overflow-hidden ">
      <div className=" bg-[#faf5ee] text-[#1d503a] px-4 py-4 rounded-[5px] flex items-center justify-between ">
        <h1 className="text-[2rem] italic capitalize ">
          Hello {userData.name} 👋
        </h1>
        <button
          onClick={handleLogOut}
          className="text-[1.5rem] bg-[#fd003a] text-[#faf5ee] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] "
        >
          Log out
        </button>
      </div>
      <div className="w-full h-[85vh] flex gap-2 ">
        <AddTask
          formData={formData}
          onChange={handleChange}
          onSubmit={handleAddTask}
          // onSubmit={handleAddTask}
          // title={title}
          // setTitle={setTitle}
          // des={desdescription}
          // setDes={setDesdescription}
          // assign={assignTime}
          // setAssin={setAssignTime}
          // category={category}
          // setCategory={setCategory}
        />

        <div className="w-full bg-[#faf5ee] text-[#1d503a] px-4 py-4 rounded-[5px] overflow-y-auto pb-4 ">
          <div className="w-full ">
            <h1 className="px-8 py-1 text-center bg-[#fd003a] text-[2rem] mb-4 text-[#faf5ee] rounded-[10px]  ">
              Task
            </h1>
            <Task
              data={task}
              onComplete={handleToggleComplete}
              onMarkas={handleMarkas}
            />
          </div>
          <div className="w-full  ">
            <h1 className="px-8 py-1 text-center bg-[#fd003a] text-[2rem] my-4 text-[#faf5ee] rounded-[10px]  ">
              Complete Task
            </h1>
            <CompleteTask data={task} markAs={handleMarkas} />
          </div>
          <div className="w-full ">
            <h1 className="px-8 py-1 text-center bg-[#fd003a] text-[2rem] my-4 text-[#faf5ee] rounded-[10px]  ">
              All Task
            </h1>
            <AllTask
              data={task}
              onComplete={handleToggleComplete}
              markAs={handleMarkas}
              onRemove={handleDeletTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBord;
