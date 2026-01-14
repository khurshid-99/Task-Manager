const Button = ({
  width = "fit",
  bg = "[#fd003a]",
  color = "[#faf5ee]",
  name,
  fun,
}) => {
  return (
    <button
      onClick={() => fun()}
      className={`w-${width} text-[1.5rem] bg-${bg} text-${color} uppercase px-4 py-1 rounded-[5px] active:scale-[0.95] `}
    >
      {name}
    </button>
  );
};

export default Button;
