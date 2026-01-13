const AddTask = ({ formData, onChange, onSubmit }) => {
  // { onSubmit, title, setTitle, des, setDes }
  return (
    <div className="px-2 py-4 rounded-[5px] w-[30rem] h-full bg-[#321b15] ">
      <h1 className="px-4 py-1 bg-[#faf5ee] text-[2rem] mb-4 text-[#1d503a] rounded-[10px] text-center ">
        Add Task
      </h1>

      <form
        action=""
        onSubmit={(e) => onSubmit(e)}
        className="w-full h-[75vh] flex flex-col gap-2 bg-[#faf5ee] rounded-[4px] text-[#1d503a] p-1 "
      >
        <input
          value={formData.value}
          onChange={(e) => onChange("title", e.target.value)}
          required
          type="text"
          placeholder="Enter Task Title"
          className="placeholder:text-[#321b15] placeholder:opacity-60 py-2 px-2 text-[1.5rem] border-2 rounded-[5px] border-[#321b15] "
        />
        <input
          value={formData.category}
          onChange={(e) => onChange("category", e.target.value)}
          type="text"
          placeholder="Type of work UI/UX "
          className="placeholder:text-[#321b15] placeholder:opacity-60 py-2 px-2 text-[1.5rem] border-2 rounded-[5px] border-[#321b15] "
        />
        <input
          value={formData.assign}
          onChange={(e) => onChange("assign", e.target.value)}
          type="datetime-local"
          className="py-2 px-2 text-[1.5rem] border-2 rounded-[5px] border-[#321b15] "
        />
        <textarea
          required
          onChange={(e) => onChange("desdescription", e.target.value)}
          value={formData.desdescription}
          name=""
          id=""
          placeholder="Tell about Task "
          className="w-full h-full placeholder:text-[#321b15] placeholder:opacity-60 py-2 px-2 text-[1.5rem] border-2 rounded-[5px] border-[#321b15] "
        ></textarea>
        <input
          type="submit"
          className="w-full bg-[#1d503a] text-[#faf5ee] text-[1.8rem] font-medium uppercase rounded-[5px] py-2 active:scale-[0.95]  cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_#6ef7bb] "
        />
      </form>
    </div>
  );
};

export default AddTask;
