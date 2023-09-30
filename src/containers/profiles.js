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
import { ProfilesTitle2 } from '../components/profiles/new-component';
import { ProfilesTitle2 as ProfilesTitle21 } from '../components/profiles/new-component2';

export function SelectProfileContainer({ setProfile }) {
  return (
    <div>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to={ROUTES.HOME} src={logo} alt="TubeFlix" />
        </HeaderFrame>
      </Header>

      <Profiles>
        <ProfilesTitle2></ProfilesTitle2>
        <ProfilesTitle21></ProfilesTitle21>
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
