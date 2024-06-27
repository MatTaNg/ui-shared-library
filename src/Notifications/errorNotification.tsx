import React from "react";
import { Snackbar, Alert } from "@mui/material";

type ErrorNotificationProps = {
  message?: string;
};

const DEFAULT_ERROR_MESSAGE =
  "Oops! Something went wrong, please try again later.";
const AUTO_HIDE_DURATION = 6000;

export const ErrorNotification = (props: ErrorNotificationProps) => {
  return (
    <Snackbar open={true} autoHideDuration={AUTO_HIDE_DURATION}>
      <Alert severity="error">{props.message ?? DEFAULT_ERROR_MESSAGE}</Alert>
    </Snackbar>
  );
};
