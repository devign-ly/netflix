import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input } from './styles/form';
import OptForm, { OptFormText, OptFormInput, OptFormButton, OptFormBreak } from '../opt-form';

export default function Form({ children }) {
  return <Container>{children}</Container>;
}

export function FormError({ children }) {
  return <Error>{children}</Error>;
}

export function FormBase({ onSubmit, method, children }) {
  return (
    <Base onSubmit={onSubmit} method={method}>
      {children}
    </Base>
  );
}

export function FormTitle({ children }) {
  return <Title>{children}</Title>;
}

export function FormText({ children }) {
  return <Text>{children}</Text>;
}

export function FormTextSmall({ children }) {
  return <TextSmall>{children}</TextSmall>;
}

export function FormLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

export function FormInput({ type, placeholder, value, onChange, autoComplete, children }) {
  return (
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete}>
      {children}
    </Input>
  );
}
export const SignUpForm = () => {
  return (
    <OptForm>
      <OptFormText>Are you ready to watch? Enter your email to create or restart your&nbsp;membership.</OptFormText>
      <OptFormInput placeholder="Email address" />
      <OptFormButton>30 Day Free Trial</OptFormButton>
      <OptFormBreak />
    </OptForm>
  );
};
