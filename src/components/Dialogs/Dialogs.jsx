import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
// import {
//   addNewMessageActionCreator,
//   updateNewMessageActionCreator,
// } from "../../redux/message-reducer";
// import { Redirect } from "react-router-dom";
import { Field, reduxForm, reset } from "redux-form";
import { TextArea } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let dialogsItems = props.dialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageItems = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  // let newMessageArea = React.createRef();

  // let onMessageChange = () => {
  //   let text = newMessageArea.current.value;
  //   props.updateMessage(text);
  // };
  //
  // let addMessage = () => {
  //   props.addMessage();
  // };

  const addMessage = (formData) => {
    props.addMessage(formData.message);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsItems}</div>
        <div className={classes.messages}>{messageItems}</div>
      </div>
      <ReduxAddMessageForm onSubmit={addMessage} />
    </div>
  );
};

const maxLength100 = maxLength(100);
const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          validate={[required, maxLength100]}
          name={"message"}
        />
      </div>
      <button>Add message</button>
    </form>
  );
};

const ReduxAddMessageForm = reduxForm({
  form: "addMessage",
})(addMessageForm);

export default Dialogs;
