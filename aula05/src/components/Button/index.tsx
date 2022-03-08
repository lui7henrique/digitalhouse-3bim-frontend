import { ButtonHTMLAttributes, HTMLProps } from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  backgroundColor?: string;
  hasShadow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{
  backgroundColor: string;
  hasShadow: boolean;
}>`
  background: ${(props) => `${props.backgroundColor}`};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 1rem;

  font-weight: bold;

  ${({ hasShadow, backgroundColor }) =>
    hasShadow &&
    css`
      -webkit-box-shadow: 0px 0px 16px 0px ${backgroundColor};
      -moz-box-shadow: 0px 0px 16px 0px ${backgroundColor};
      box-shadow: 0px 0px 16px 0px ${backgroundColor};
    `}

  &:hover {
    ${({ hasShadow, backgroundColor }) =>
      hasShadow &&
      css`
        -webkit-box-shadow: 0px 0px 32px 0px ${backgroundColor};
        -moz-box-shadow: 0px 0px 32px 0px ${backgroundColor};
        box-shadow: 0px 0px 32px 0px ${backgroundColor};
      `}
  }
`;

export const Button = (props: ButtonProps) => {
  const {
    label,
    backgroundColor = "#00d397",
    hasShadow = false,
    ...rest
  } = props;

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      hasShadow={hasShadow}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
