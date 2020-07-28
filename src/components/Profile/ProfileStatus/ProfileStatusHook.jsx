import React, { useEffect, useState } from "react";

const ProfileStatusHooks = (props) => {
  // let state = useState(true);
  // let editMode = state[0];
  // let setEditMode = state[1];

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(props.userId, status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
            value={status}
          />
        </div>
      )}
    </>
  );
};
export default ProfileStatusHooks;
