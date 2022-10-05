import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: var(--space-20);
  font-size: var(--font-size-sm);
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: var(--font-size-md);
  color: #757575;
  margin-bottom: var(--space-40);
`;

export const Text = styled.p`
  font-size: var(--font-size-sm);
  color: #757575;
  margin-bottom: var(--space-40);
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
