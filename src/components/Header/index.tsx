import { Container, Logo, Profile } from "./styles";

import logoImg from "@assets/Logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Profile source={{ uri: "https://www.github.com/alexpacheli.png" }} />
    </Container>
  );
}
