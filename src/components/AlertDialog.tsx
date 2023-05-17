import type { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export interface IAlertDialogProps {
  sureDialog: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const AlertDialog: FC<IAlertDialogProps> = ({
  sureDialog,
  handleClose,
  handleDelete,
}) => {
  return (
    <Dialog open={sureDialog} onClose={handleClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this person?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
