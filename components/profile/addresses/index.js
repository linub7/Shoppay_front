import CheckoutPageComponentShipping from 'components/checkout/shipping';
import { useState } from 'react';
import ProfilePageComponentLayout from '../layout';

const ProfileAddressesPageComponent = ({ me, tab }) => {
  const [addresses, setAddresses] = useState(me?.addresses);
  return (
    <ProfilePageComponentLayout me={me} tab={tab}>
      <CheckoutPageComponentShipping
        addresses={addresses}
        setAddresses={setAddresses}
        user={me}
      />
    </ProfilePageComponentLayout>
  );
};

export default ProfileAddressesPageComponent;
