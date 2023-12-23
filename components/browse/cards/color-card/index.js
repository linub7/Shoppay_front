const BrowsePageComponentColorCard = ({ color, onClick = () => {} }) => {
  return (
    <button
      style={{ background: `${color}` }}
      onClick={() => onClick(color)}
    ></button>
  );
};

export default BrowsePageComponentColorCard;
