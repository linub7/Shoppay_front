import styles from '../../styles.module.scss';

const BrowsePageComponentColorCard = ({
  color,
  check = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={check ? styles.activeColorFilter : ''}
      style={{ background: `${color}` }}
      onClick={() => onClick(color)}
    ></button>
  );
};

export default BrowsePageComponentColorCard;
