import { useState } from 'react';
import ProfilePageComponentHeader from '../header';
import ProfilePageComponentLayout from '../layout';
import CheckoutPageComponentPayment from 'components/checkout/payment';
import ProfilePageComponentButton from '../button';
import { setDefaultUserPaymentMethodHandler } from 'actions/users';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const ProfilePaymentPageComponent = ({ me, tab }) => {
  const [paymentMethod, setPaymentMethod] = useState(me?.defaultPaymentMethod);
  const [databasePaymentMethod, setDatabasePaymentMethod] = useState(
    me?.defaultPaymentMethod
  );

  const { token } = useSelector((state) => state.auth);

  console.log(paymentMethod);
  const handleSaveDefaultPaymentMethod = async () => {
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
  };
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
