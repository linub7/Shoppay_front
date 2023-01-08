import CartPageComponent from 'components/cart';
import CommonLayout from 'components/shared/layout/CommonLayout';
import PageHeader from 'components/shared/page-header';
import Head from 'next/head';
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
