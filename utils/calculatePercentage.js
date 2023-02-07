export const calculatePercentage = (num, reviews) => {
  return (
    (reviews?.reduce(
      (a, review) =>
        a +
        (review.rating === Number(num) || review.rating === Number(num) + 0.5),
      0
    ) *
      100) /
    reviews?.length
  ).toFixed(1);
};
