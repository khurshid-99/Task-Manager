import ImportantImg from "../../public/important.png";
import CompletedImg from "../../public/completed.png";
const CompleteTask = ({ data }) => {
  return (
    <div
      className="w-full flex flex-wrap gap-4 relative
     "
    >
      {data &&
        data.map(
          (task) =>
            // console.log(task.completed)
            task.completed && (
              <div
                key={task.id}
                className="bg-[#321b15] text-[#faf5ee] w-[20rem] h-[25rem] p-4 grow rounded-[10px] flex flex-col justify-between relative "
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

                {task.completed && (
                  <img
                    src={CompletedImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-1/2 w-[10rem] rotate-[40deg] "
                  />
                )}
              </div>
            )
        )}
    </div>
  );
};

export default CompleteTask;
