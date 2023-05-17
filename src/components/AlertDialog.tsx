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
  onClose: () => void;
  onCancel?: () => void;
  onDelete: () => void;
}

const AlertDialog: FC<IAlertDialogProps> = ({
  sureDialog,
  onClose,
  onCancel = onClose,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Dialog open={sureDialog} onClose={onClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete it permanently?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
