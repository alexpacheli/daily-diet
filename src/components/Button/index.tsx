import { ButtonStyleProps, Container, Icon, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";

import { Icon } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({ title, type = "ACTIVE", ...rest }: Props) {
  return (
    <Container type={type} activeOpacity={0.5} {...rest}>
      <Icon type={type} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}
