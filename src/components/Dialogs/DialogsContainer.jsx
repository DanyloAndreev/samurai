import React from "react";
import {
  addNewMessageActionCreator,
  // updateNewMessageActionCreator,
} from "../../redux/message-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messageReducer.messages.dialogsData,
    messagesData: state.messageReducer.messages.messagesData,
    newMessageText: state.messageReducer.messages.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addNewMessageActionCreator(message));
    },
    // updateMessage: (text) => {
    //   dispatch(updateNewMessageActionCreator(text));
    // },
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
//
// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect,
  withRouter
)(DialogsContainer);
