import { useNavigation } from "@react-navigation/native";

import {
  Container,
  CardSummary,
  IconWrapper,
  Icon,
  Title,
  Subtitle,
  Text,
} from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ListMeals } from "@components/ListMeals";

export function Home() {
  const navigation = useNavigation();

  function handleSummary() {
    navigation.navigate("summary");
  }

  return (
    <Container>
      <Header />

      <CardSummary type="SECONDARY">
        <IconWrapper onPress={handleSummary}>
          <Icon type="SECONDARY" />
        </IconWrapper>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </CardSummary>

      <Text>Refeições</Text>
      <Button title="Nova refeição" />

      <ListMeals clock="20:00" meal="X-Tudo" statusMeal="PRIMARY" />
      <ListMeals
        clock="20:00"
        meal="Lasanha de frango com queijo"
        statusMeal="SECONDARY"
      />
      <ListMeals clock="20:00" meal="Torta de chocolate" statusMeal="PRIMARY" />
    </Container>
  );
}
