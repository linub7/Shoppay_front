import { useState } from 'react';
import styles from '../../styles.module.scss';
import SingleProductComponentReviewsTableSelect from '../select';

const ratings = [
  { text: 'All', value: '' },
  { text: '5 Star', value: 5 },
  { text: '4 Star', value: 4 },
  { text: '3 Star', value: 3 },
  { text: '2 Star', value: 2 },
  { text: '1 Star', value: 1 },
];

const orderOptions = [
  {
    text: 'Recommended',
    value: 'Recommended',
  },
  {
    text: 'Most recent to oldest',
    value: 'Most recent to oldest',
  },
  {
    text: 'Oldest to most recent',
    value: 'Oldest to most recent',
  },
];

const SingleProductComponentReviewsTableHeader = ({
  reviews,
  allSizes,
  colors,
}) => {
  const [rating, setRating] = useState();
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  const [order, setOrder] = useState();
  return (
    <div className={styles.table__header}>
      <SingleProductComponentReviewsTableSelect
        property={rating}
        text="Rating"
        options={ratings.filter((el) => el.value !== rating)}
        handleChange={setRating}
      />
      <SingleProductComponentReviewsTableSelect
        property={size}
        text="Size"
        options={allSizes?.filter((el) => el.size !== size)}
        handleChange={setSize}
      />
      <SingleProductComponentReviewsTableSelect
        property={style}
        text={'Style'}
        options={colors?.filter((clr) => clr !== style)}
        handleChange={setStyle}
      />
      <SingleProductComponentReviewsTableSelect
        property={order}
        text={'Order'}
        options={orderOptions?.filter((el) => el.value !== order)}
        handleChange={setOrder}
      />
    </div>
  );
};

export default SingleProductComponentReviewsTableHeader;
