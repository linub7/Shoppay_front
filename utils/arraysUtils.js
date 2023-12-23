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

export const randomize = (array) => [...array]?.sort(() => 0.5 - Math.random());

export const handleAddElement = (elementsArray, newElement) => {
  // Check for duplicates
  const uniqueElements = elementsArray?.filter((element, index) => {
    return elementsArray?.indexOf(element) === index;
  });

  // Add the new element if it's unique
  if (uniqueElements?.indexOf(newElement) === -1) {
    uniqueElements?.push(newElement);
  }

  // Reconstruct the string, preserving order
  const updatedString = uniqueElements?.join('_');

  // Update the state or component value with the updated string
  return updatedString;
};
