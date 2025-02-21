const Button = ({ text, className, primary, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition ${
        primary
          ? "bg-olive-green hover:bg-black"
          : "border-2 border-solid border-white hover:bg-white hover:text-black"
      } ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
