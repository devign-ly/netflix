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
import Alert from '@mui/material/Alert';

export function SelectProfileContainer({ setProfile }) {
  return (
    <div>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to={ROUTES.HOME} src={logo} alt="TubeFlix" />
        </HeaderFrame>
      </Header>

      <Profiles>
        <Alert
          severity="success"
          sx={{
            margin: '1em',
          }}
        >
          This is a warning alert — check it out!
        </Alert>
        <Button>Click me</Button>
        <ProfilesTitle>Who's watching now?</ProfilesTitle>
        <ProfilesList>
          {profiles.map((profile) => (
            <ProfilesUser key={profile.name} onClick={() => setProfile(profile)} data-testid="user-profile">
              <ProfilesName>{profile.name}</ProfilesName>
              <ProfilesPicture src={profile.avatar} />
            </ProfilesUser>
          ))}
        </ProfilesList>
      </Profiles>
    </div>
  );
}
