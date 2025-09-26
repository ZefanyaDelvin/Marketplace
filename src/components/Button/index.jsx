const Button = ({ children, onClick, buttonName, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-500 ${className}`}
    >
      {children || buttonName}
    </button>
  );
};

export default Button;
