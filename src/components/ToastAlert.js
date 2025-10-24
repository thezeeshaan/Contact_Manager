import React from "react";
import { Message, Transition } from "semantic-ui-react";

function ToastAlert({ open, message, positive, negative, onClose }) {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Transition visible={open} animation="fade" duration={400}>
      <div
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          zIndex: 2000,
          minWidth: 280,
        }}
      >
        <Message
          positive={positive}
          negative={negative}
          onDismiss={onClose}
          style={{ margin: 0 }}
        >
          {message}
        </Message>
      </div>
    </Transition>
  );
}

export default ToastAlert;
