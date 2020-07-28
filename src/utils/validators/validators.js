export const required = (value) => {
  if (value) return undefined;

  return "This field is required";
};

export const maxLength = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Text length must be under ${maxLength}`;
  }

  return undefined;
};
