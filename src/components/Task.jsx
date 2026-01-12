import ImportantImg from "../../public/important.png";
const Task = ({ data, onComplete, onMarkas }) => {
  // console.log(data);

  return (
    <div
      className="w-full flex flex-wrap gap-4
    "
    >
      {data.map(
        (task) =>
          !task.completed && (
            <div
              key={task.id}
              className="bg-[#321b15] text-[#faf5ee] w-[20rem] h-[15rem] p-4 grow rounded-[10px] flex flex-col justify-between relative
         "
            >
              {task.markas && (
                <img
                  src={ImportantImg}
                  alt="imp"
                  className="absolute z-99 w-20 h-20 top-0 right-0 "
                />
              )}
              <div>
                <h1 className="text-[2rem] capitalize ">{task.title}</h1>
                <p className="text-[1.4rem] font-light opacity-70 ">
                  {task.desdescription}
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <button
                  onClick={() => onMarkas(task.id)}
                  className="text-[1.5rem] bg-[#faf5ee] text-[#1d503a] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] "
                >
                  {task.markas ? "Marked" : "Mark"}
                </button>
                <button
                  onClick={() => onComplete(task.id)}
                  className="text-[1.5rem] bg-[#faf5ee] text-[#1d503a] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] "
                >
                  Complete
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Task;
