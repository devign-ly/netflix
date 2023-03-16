import React from 'react';
import { Container, Row, Column, Link, Title, Break } from './styles/footer';
import Button from '../button';

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

export function FooterRow({ children }) {
  return <Row>{children}</Row>;
}

export function FooterColumn({ children }) {
  return <Column>{children}</Column>;
}

export function FooterLink({ href, children }) {
  return <Link href={href}>{children}</Link>;
}

export function FooterTitle({ children }) {
  return <Title>{children}</Title>;
}

export function FooterBreak() {
  return <Break />;
}
export const LiveChat = () => {
  return (
    <Help
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'space-between',
      }}
    >
      <img src="https://randomuser.me/api/portraits/men/28.jpg" />

      <ChatText>
        <LiveChat>I'm here to help</LiveChat>

        <Button>Chat Now</Button>
      </ChatText>
    </Help>
  );
};
