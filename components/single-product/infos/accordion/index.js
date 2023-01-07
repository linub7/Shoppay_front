import styles from '../styles.module.scss';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SingleProductComponentInfosAccordion({ details }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.infos__accordion}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={styles.accordion__summary}
        >
          Details
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.infos__accordion_grid}>
            <p>{details[0]}</p>
          </div>
        </AccordionDetails>
        <AccordionDetails className="scrollbar">
          {details?.slice(1, details?.length).map((info, index) => (
            <div className={styles.infos__accordion_grid} key={index}>
              <span>{info?.name}:</span>
              <span>{info?.value}</span>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={styles.accordion__summary}
        >
          Fit & Sizes
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.infos__accordion_grid}></div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
