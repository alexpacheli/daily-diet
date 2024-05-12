import {
  Container,
  Status,
  StatusMealProps,
  TextClock,
  TextMeal,
  Divider,
} from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  clock: string;
  meal: string;
  statusMeal: StatusMealProps;
};

export function ListMeals({ clock, meal, statusMeal, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TextClock>{clock}</TextClock>
      <Divider />
      <TextMeal>{meal}</TextMeal>
      <Status statusMeal={statusMeal} />
    </Container>
  );
}
