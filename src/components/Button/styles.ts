import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = "ACTIVE" | "DEFAULT";

type Props = {
  type?: ButtonStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;

  ${({ theme, type }) =>
    type &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_1};
    `}

  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === "ACTIVE" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`;

export const Icon = styled(Plus).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === "ACTIVE" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))`
  margin-right: 10px;
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === "ACTIVE" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
