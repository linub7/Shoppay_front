import { Tooltip } from '@mui/material';

import styles from './styles.module.scss';

const CustomTooltip = ({ title, placement, style }) => {
  return (
    <Tooltip title={<h2>{title}</h2>} placement={placement} arrow>
      <button className={styles.tooltip_btn}>
        <span style={style}></span>
      </button>
    </Tooltip>
  );
};

export default CustomTooltip;
