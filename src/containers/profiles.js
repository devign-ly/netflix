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
import { img, div } from '../prefab/components/html';
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
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#888',
            }}
          />
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#888',
            }}
          />
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#888',
            }}
          />
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
