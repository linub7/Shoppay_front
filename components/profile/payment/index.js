import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import ProfilePageComponentHeader from '../header';
import ProfilePageComponentLayout from '../layout';
import CheckoutPageComponentPayment from 'components/checkout/payment';
import ProfilePageComponentButton from '../button';
import { setDefaultUserPaymentMethodHandler } from 'actions/users';

const ProfilePaymentPageComponent = ({ me, tab }) => {
  const [paymentMethod, setPaymentMethod] = useState(me?.defaultPaymentMethod);
  const [databasePaymentMethod, setDatabasePaymentMethod] = useState(
    me?.defaultPaymentMethod
  );

  const { token } = useSelector((state) => state.auth);

  const handleSaveDefaultPaymentMethod = useCallback(async () => {
    const { err, data } = await setDefaultUserPaymentMethodHandler(
      token,
      paymentMethod
    );
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    if (data?.status === 'success') {
      toast.success('Default Payment method changed successfully.✅');
      setDatabasePaymentMethod(data?.data?.data?.defaultPaymentMethod);
    }
  }, [token, paymentMethod]);
  // const handleSaveDefaultPaymentMethod = async () => {
  //   const { err, data } = await setDefaultUserPaymentMethodHandler(
  //     token,
  //     paymentMethod
  //   );
  //   if (err) {
  //     console.log(err);
  //     toast.error(err);
  //     return;
  //   }
  //   if (data?.status === 'success') {
  //     toast.success('Default Payment method changed successfully.✅');
  //     setDatabasePaymentMethod(data?.data?.data?.defaultPaymentMethod);
  //   }
  // };
  return (
    <ProfilePageComponentLayout me={me} tab={tab}>
      <ProfilePageComponentHeader header={'My Payment Method: '} />
      <CheckoutPageComponentPayment
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        profile={true}
      />
      <ProfilePageComponentButton
        btnTitle={'Save Default Payment Method'}
        onClick={handleSaveDefaultPaymentMethod}
        disabled={!paymentMethod || paymentMethod === databasePaymentMethod}
      />
    </ProfilePageComponentLayout>
  );
};

export default ProfilePaymentPageComponent;
