import React from 'react';
import { ProfilesUser, ProfilesPicture, ProfilesName } from '../components/profiles';

const Preview = () => {
  return (
    <ProfilesUser onClick={(...args) => console.log('onClick', args)} data-testid="user-profile">
      <ProfilesPicture src={4} />
      <ProfilesName>Alex aksdjhfal sdkfj asld fasdf</ProfilesName>
    </ProfilesUser>
  );
};
export default Preview;
