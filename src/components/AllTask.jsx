import ImportantImg from "../../public/important.png";
import CompletedImg from "../../public/completed.png";

const AllTask = ({ data, onComplete, markAs, onRemove }) => {
  return (
    <div className="w-full flex flex-wrap gap-4">
      {data.map((task) => (
        <div
          key={task.id}
          className="bg-[#321b15] text-[#faf5ee] w-[20rem] h-[20rem] p-4 grow rounded-[10px] flex flex-col justify-between relative
         "
        >
          {task.markas && (
            <img
              src={ImportantImg}
              alt="imp"
              className="absolute z-99 w-20 h-20 top-0 right-0 "
            />
          )}
          {task.completed && (
            <img
              src={CompletedImg}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-1/2 w-[10rem] rotate-[40deg] "
            />
          )}
          <div>
            <h1 className="text-[2rem] capitalize ">{task.title}</h1>
            <p className="text-[1.4rem] font-light opacity-70 ">
              {task.desdescription}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-4 ">
            <div className="w-full flex items-center justify-between ">
              <button className="text-[1.5rem] bg-[#faf5ee] text-[#1d503a] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] ">
                {task.markas ? "Marked" : "mark"}
              </button>
              {task.completed ? (
                ""
              ) : (
                <button className="text-[1.5rem] bg-[#faf5ee] text-[#1d503a] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] ">
                  Complete
                </button>
              )}
            </div>

            <button
              //   onClick={() => onComplete(task.id)}
              className="w-full text-[1.5rem] bg-[#fd003a] text-[#faf5ee] uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
