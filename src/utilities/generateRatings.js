import { Filled, Empty } from "constants";

const generateRatings = (ratingsGiven) => {
  const ratings = [1, 2, 3, 4, 5];
  const generatedRatings = ratings.map((everyRating) =>
    everyRating <= ratingsGiven ? (
      <Filled size={15} color="#FFC94D" />
    ) : (
      <Empty size={15} color="#FFC94D" />
    )
  );
  return generatedRatings;
};

export { generateRatings };
