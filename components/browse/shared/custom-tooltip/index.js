import { Tooltip } from '@mui/material';

import styles from './styles.module.scss';

const CustomTooltip = ({
  title,
  placement,
  style,
  isActive = false,
  onClick = () => {},
}) => {
  return (
    <Tooltip title={<h2>{title}</h2>} placement={placement} arrow>
      <button
        className={`${styles.tooltip_btn} ${isActive ? styles.active : ''}`}
        onClick={onClick}
      >
        <span style={style}></span>
      </button>
    </Tooltip>
  );
};

export default CustomTooltip;
