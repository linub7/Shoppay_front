import React from 'react';
import ProfilePageComponentLayout from '../layout';

const ProfileOrdersPageComponent = ({ orders, me, tab }) => {
  return (
    <ProfilePageComponentLayout me={me} tab={tab}></ProfilePageComponentLayout>
  );
};

export default ProfileOrdersPageComponent;
