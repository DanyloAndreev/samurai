import React from "react";
import classes from "./FormControl.module.css";

const Element = (Element) => ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;

  return (
    <div className={classes.formControl + " " + (hasError && classes.error)}>
      <div>
        <Element {...props} {...input} />
      </div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const TextArea = Element("textarea");
export const Input = Element("input");
