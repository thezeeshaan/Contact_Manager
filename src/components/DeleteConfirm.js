import React from "react";
import { Confirm } from "semantic-ui-react";

function DeleteConfirm({ open, onCancel, onConfirm }) {
  return (
    <Confirm
      open={open}
      onCancel={onCancel}
      onConfirm={onConfirm}
      content="Are you sure you want to delete this contact?"
      size="mini"
    />
  );
}

export default DeleteConfirm;
