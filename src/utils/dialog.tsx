import AlertDialog, { AlertDialogProps } from 'components/common/AlertDialog';
import React from 'react';
import ReactDOM from 'react-dom';
// Build-in dialogs

const createDialog = (DialogComponent: React.FC<any>, props = {}) => {
  // Create a root
  const root = document.createElement('div');

  // Append root to body
  document.body.appendChild(root);

  const Modal = () => {
    // const onLocationChange = useCallback(() => {
    //   ReactDOM.unmountComponentAtNode(root);
    // }, []);

    // useEffect(() => {
    //   event.on(EVENT_LOCATION_CHANGE, onLocationChange);

    //   return () => {
    //     event.off(EVENT_LOCATION_CHANGE, onLocationChange);
    //   };
    // }, [onLocationChange]);

    return <DialogComponent {...props}></DialogComponent>;
  };

  // Render dialog component inside that div
  ReactDOM.render(<Modal />, root);
};

const alertDialog = (props: AlertDialogProps = {}) => {
  return createDialog(AlertDialog, props);
};

export { createDialog, alertDialog };
