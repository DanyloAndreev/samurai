import { Field } from "redux-form";
import React from "react";

export const createField = (
  name,
  placeholder,
  component,
  validators,
  props
) => (
  <Field
    name={name}
    placeholder={placeholder}
    component={component}
    validate={validators}
    {...props}
  />
);
