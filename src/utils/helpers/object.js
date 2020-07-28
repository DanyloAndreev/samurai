export const updateObjectInArray = (array, propName, propValue, newProps) => {
  return array.map((item) => {
    if (item[propName] === propValue) {
      return {
        ...item,
        ...newProps,
      };
    }
    return item;
  });
};
