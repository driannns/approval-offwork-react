const CustomButton = ({ value, action, variant }) => {
  return (
    <button className={`btn ${variant}`} onClick={action}>
      {value}
    </button>
  );
};

export default CustomButton;
