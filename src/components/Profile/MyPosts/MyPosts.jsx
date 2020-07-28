import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormControls";

const MyPosts = React.memo((props) => {
  //no side eeffect inside function
  //idempotence,determine. same arguments = same return
  //immutable. Function may not change outside data
  let postsElements = [...props.postsData]
    .reverse()
    .map((post) => <Post message={post.text} likesCount={post.likesCount} />);
  // let newPostArea = React.createRef();

  let addPost = (formData) => {
    props.addPost(formData.post);
  };

  // let onPostChange = () => {
  //   let text = newPostArea.current.value;
  //   props.updateNewPostText(text);
  // };

  //function must return something
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <ReduxAddPost onSubmit={addPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLength(10);

const AddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"post"}
        validate={[required, maxLength10]}
      />
      <button>Add post</button>
    </form>
  );
};

const ReduxAddPost = reduxForm({
  form: "addPost",
})(AddPost);

export default MyPosts;
