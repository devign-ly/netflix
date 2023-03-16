import React from 'react';
import styled from 'styled-components/macro';
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

export const LiveChat1 = styled.div`
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: white;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Help = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  width: 250px;
  height: 100px;
  background-color: #252525;
  border-radius: 8px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  margin: 1em;
`;

export const ChatText = styled.div`
  margin-right: 18px;
`;

export const LiveChat = () => {
  return (
    <Help>
      <img src="https://randomuser.me/api/portraits/men/28.jpg" />

      <ChatText>
        <LiveChat1>I'm here to help</LiveChat1>

        <Button>Chat Now</Button>
      </ChatText>
    </Help>
  );
};
