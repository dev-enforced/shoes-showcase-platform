import { Filled, Empty } from "constants";

const generateRatings = (ratingsGiven) => {
  const ratings = [1, 2, 3, 4, 5];
  const generatedRatings = ratings.map((everyRating) =>
    everyRating <= ratingsGiven ? (
      <Filled key={everyRating} size={15} color="#FFC94D" />
    ) : (
      <Empty key={everyRating} size={15} color="#FFC94D" />
    )
  );
  return generatedRatings;
};

export { generateRatings };
