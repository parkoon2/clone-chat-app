import React from "react";

// Styled
import { StyledButton } from "./styled/StyledButton";

const Button = props => <StyledButton {...props}>{props.icon}</StyledButton>;

export default Button;
