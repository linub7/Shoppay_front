export const compareArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  const nw = (object) =>
    JSON.stringify(
      object
        .keys(object)
        .sort()
        .map((key) => [key, object[key]])
    );
  array1 = new Set(array1.map(nw));
  return array2.every((object) => array1.has(nw(object)));
};
