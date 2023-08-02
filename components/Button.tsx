import { buttonProps } from "@/types";
import React from "react";

interface ButtonProps {
  button: buttonProps;
  isActive: boolean;
  onClick: (buttonId: number, buttonLabel: string) => void;
}

const Button: React.FC<ButtonProps> = ({button, isActive, onClick}) => {
  return (
    <button className={`btn ${isActive ? 'active' : null}`} onClick={() => onClick(button.id, button.label)}>
      {button.label}
    </button>
  );
};

export default Button;
