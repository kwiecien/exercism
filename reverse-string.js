export const reverseString = (text) => {
  let reversed = "";
  for (let index = text.length - 1; index >= 0; index--) {
    reversed += text.at(index);
  }
  return reversed;
};
