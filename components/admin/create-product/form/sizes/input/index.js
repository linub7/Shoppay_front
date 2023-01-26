const AdminCreateProductPageComponentFormSizesInput = ({
  name,
  placeholder,
  min,
  value,
  handleChange,
  i,
}) => {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      min={min}
      value={value}
      onChange={(e) => handleChange(i, e)}
    />
  );
};

export default AdminCreateProductPageComponentFormSizesInput;
