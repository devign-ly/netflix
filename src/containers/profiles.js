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
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export function SelectProfileContainer({ setProfile }) {
  return (
    <div>
      <Alert severity="warning">
        Your subscription is about to expire!&nbsp;<a href="http://google.com">Click here</a>&nbsp;to renew today.
      </Alert>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </HeaderFrame>
      </Header>

      <Profiles>
        <ProfilesTitle>Who's watching?</ProfilesTitle>
        <ProfilesList>
          {profiles.map((profile) => (
            <ProfilesUser key={profile.name} onClick={() => setProfile(profile)} data-testid="user-profile">
              <ProfilesPicture src={profile.avatar} />
              <ProfilesName>{profile.name}</ProfilesName>
            </ProfilesUser>
          ))}
        </ProfilesList>
      </Profiles>
    </div>
  );
}
