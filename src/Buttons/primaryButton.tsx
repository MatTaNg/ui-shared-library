import React from "react";
import "./buttons.scss";
import Button from "@mui/material/Button";

type PrimaryButtonProps = {
  className?: string;
  id: string;
  isDisabled?: boolean;
  onClick: (value: any) => void;
  children: React.ReactNode;
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Button
      id={props.id}
      variant="contained"
      className={props.className}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </Button>
  );
};
