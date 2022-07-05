import type { FC } from "react";
import type { ButtonProps } from "../../types";

import { StyledButton } from "./styles";

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
