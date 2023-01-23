const AdminCreateProductPageComponentFormImagesItemActionButton = ({
  onClick,
  children,
}) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default AdminCreateProductPageComponentFormImagesItemActionButton;
