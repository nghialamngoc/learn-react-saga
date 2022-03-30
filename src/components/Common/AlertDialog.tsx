import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface AlertDialogProps {
  title?: string;
  message?: string;
  handleSubmit?: Function;
}

export default function AlertDialog({
  title,
  message,
  handleSubmit,
}: AlertDialogProps) {
  const [visible, setVisible] = React.useState(true);

  const onConfirm = () => {
    if (handleSubmit) {
      return handleSubmit({
        setVisible,
      });
    }

    setVisible(false);
  };

  return (
    <div>
      <Dialog
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVisible(false)}>Cancel</Button>
          <Button onClick={onConfirm} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
