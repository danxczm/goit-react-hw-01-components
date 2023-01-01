import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  border: 1px solid gray;
  border-radius: 30px;
  min-width: 300px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  svg {
    margin-right: 5px;
    color: gray;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 200px;
  box-shadow: inset 0 0 10px gray;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
