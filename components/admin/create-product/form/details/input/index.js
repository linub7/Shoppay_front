const AdminCreateProductPageComponentFormDetailsInput = ({
  name,
  placeholder,
  value,
  handleChange,
  i,
}) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(i, e)}
    />
  );
};

export default AdminCreateProductPageComponentFormDetailsInput;
