import React from 'react';
import Header, { HeaderFrame, HeaderLogo } from '../components/header';
import Profiles, {
  ProfilesTitle,
  ProfilesList,
  ProfilesUser,
  ProfilesPicture,
  ProfilesName,
} from '../components/profiles';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import profiles from '../data/profiles.json';
import Button from '../components/button';

export function SelectProfileContainer({ setProfile }) {
  return (
    <div>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to={ROUTES.HOME} src={logo} alt="TubeFlix" />
        </HeaderFrame>
      </Header>

      <Profiles>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          <Button>Approve</Button>

          <Button>Approve</Button>
        </div>

        <ProfilesList>
          {profiles.map((profile) => (
            <ProfilesUser key={profile.name} onClick={() => setProfile(profile)} data-testid="user-profile">
              <ProfilesPicture src={profile.avatar} />
              <ProfilesName>{profile.name}</ProfilesName>
            </ProfilesUser>
          ))}
        </ProfilesList>
        <ProfilesTitle>Who's watching?</ProfilesTitle>
      </Profiles>
    </div>
  );
}
