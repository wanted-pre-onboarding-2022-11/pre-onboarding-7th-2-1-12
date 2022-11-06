export const formatAmout = (amount) => {
  return `${amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
};
