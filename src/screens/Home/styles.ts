import { ArrowUpRight } from "phosphor-react-native";

import styled from "styled-components/native";

export type BackgroundStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: BackgroundStyleProps;
};

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const CardSummary = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 102px;
  border-radius: 8px;
  margin-bottom: 30px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
