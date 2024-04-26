const getInputValue = (querySelector) => {
  const input = document.querySelector(querySelector);
  if (!input) return undefined;
  return input.value;
};
