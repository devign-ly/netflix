import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-family: var(--font-title);
  font-size: var(--text-3xl);
  text-align: center;
  font-weight: var(--font-semibold);
`;

export const List = styled.ul`
  padding: 0;
  margin: var(--space-0);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: var(--text-xl);
  font-family: var(--font-body);
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-weight: var(--font-bold);
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 10px;
`;

export const Item = styled.li`
  max-height: 200px;
  width: 300px;
  list-style-type: none;
  text-align: center;
  margin-right: var(--space-30);
  display: flex;
  background-color: #484848;
  border-radius: 10px;
  cursor: pointer;
  &:hover > ${Picture} {
    outline: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: var(--font-bold);
    color: white;
  }
  &:last-of-type {
  }
`;
