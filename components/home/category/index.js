import { womenShoes } from 'constants';
import { womenAccessories } from 'constants';
import { womenDresses } from 'constants';
import { useMediaQuery } from 'react-responsive';
import HomeCategoryCard from './card';

const HomeCategoryComponent = () => {
  const isMedium = useMediaQuery({ query: '(max-width: 850px)' });

  return (
    <>
      <HomeCategoryCard
        header={'Dresses'}
        background="#5a31f4"
        products={womenDresses}
      />
      {!isMedium && (
        <HomeCategoryCard
          header={'Shoes'}
          background="#3c811f"
          products={womenShoes}
        />
      )}
      <HomeCategoryCard
        header={'Accessories'}
        background="#000"
        products={womenAccessories}
      />
    </>
  );
};

export default HomeCategoryComponent;
