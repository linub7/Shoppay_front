/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SingleProductComponentReviewsSelect = ({
  property,
  text,
  options,
  handleChange,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.select}>
      {text}:
      <div
        className={styles.select__header}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{
          background: `${
            text === 'Style' && property?.color ? `${property?.color}` : ''
          }`,
        }}
      >
        <span
          className={`${styles.d_flex} ${styles.select__header_wrap}`}
          style={{
            padding: '0 5px',
          }}
        >
          {text === 'Size' ? (
            property || `Select ${text}`
          ) : text === 'Style' && property?.image ? (
            <img src={property?.image} alt="image" />
          ) : text === 'How does it fit' && property ? (
            property
          ) : !property && text === 'How does it fit' ? (
            'How does it fit'
          ) : (
            'Select Style'
          )}
          <IoArrowDownOutline />
        </span>
        {visible && (
          <ul className={styles.select__header_menu}>
            {options?.map((opt, i) => {
              if (text === 'Size') {
                return (
                  <li key={i} onClick={() => handleChange(opt?.size)}>
                    <span>{opt?.size}</span>
                  </li>
                );
              }
              if (text === 'Style') {
                return (
                  <li
                    key={i}
                    onClick={() => handleChange(opt)}
                    style={{ backgroundColor: `${opt?.color}` }}
                  >
                    <span>
                      <img src={opt?.image} alt="image" />
                    </span>
                  </li>
                );
              }
              if (text === 'How does it fit') {
                return (
                  <li key={i} onClick={() => handleChange(opt)}>
                    <span>{opt}</span>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsSelect;
