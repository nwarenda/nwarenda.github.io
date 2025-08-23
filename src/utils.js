// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
export const getImageUrl = (path) => {
  const assetPath = `/assets/${path}`;
  return new URL(assetPath, import.meta.url).href;
};
