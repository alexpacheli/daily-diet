import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 66px;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;
