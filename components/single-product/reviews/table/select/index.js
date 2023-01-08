/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SingleProductComponentReviewsTableSelect = ({
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
          {text === 'Rating' || text === 'Size' || text === 'Order' ? (
            property || `Select ${text}`
          ) : text === 'Style' && property?.image ? (
            <img src={property?.image} alt="image" />
          ) : (
            'Select Style'
          )}
          <IoArrowDownOutline />
        </span>
        {visible && (
          <ul
            className={styles.select__header_menu}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            style={{ width: text === 'Order' ? '200px' : '' }}
          >
            {options?.map((opt, i) => {
              if (text === 'Rating') {
                return (
                  <li key={i} onClick={() => handleChange(opt?.value)}>
                    <span>{opt?.text}</span>
                  </li>
                );
              }
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
                      {opt?.image ? (
                        <img src={opt?.image} alt="image" />
                      ) : (
                        'All Styles'
                      )}
                    </span>
                  </li>
                );
              }
              if (text === 'Order') {
                return (
                  <li
                    style={{ width: text === 'Order' ? '200px' : '' }}
                    key={i}
                    onClick={() => handleChange(opt?.value)}
                  >
                    <span>{opt?.text}</span>
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

export default SingleProductComponentReviewsTableSelect;
