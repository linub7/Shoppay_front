import CartPageComponent from 'components/cart';
import PageHeader from 'components/shared/page-header';
import React from 'react';

const CartPage = () => {
  return (
    <>
      <PageHeader title={'ShopPay - Cart'} content={'ShopPay Cart page'} />
      <CartPageComponent />
    </>
  );
};

export default CartPage;
