import React from 'react';
import Feature, { FeatureTitle, FeatureSubTitle } from '../components/feature';
import OptForm, { OptFormInput, OptFormButton, OptFormBreak, OptFormText } from '../components/opt-form';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { SignUpForm } from '../components/form';
import { LiveChat } from '../components/footer';

export default function Home() {
  return (
    <div>
      <LiveChat></LiveChat>
      <HeaderContainer showSignIn>
        <Feature>
          <FeatureTitle>Unlimited movies, TV shows, and more.</FeatureTitle>

          <SignUpForm></SignUpForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}
