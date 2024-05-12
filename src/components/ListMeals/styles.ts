import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export type StatusMealProps = "PRIMARY" | "SECONDARY";

type Props = {
  statusMeal: StatusMealProps;
};

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  margin-bottom: 8px;
`;

export const TextClock = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Divider = styled.View`
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  height: 14px;
  margin-right: 8px;
  margin-left: 8px;
`;

export const TextMeal = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, statusMeal }) =>
    statusMeal === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
