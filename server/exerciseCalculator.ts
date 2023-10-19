interface exerciseValues {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
    }

function printValues(pt: exerciseValues) {
    return pt;
}
const calculateExercises= (a: number[]) => {
  const aWithoutFirstElement = a.slice(1);
  const average =  aWithoutFirstElement.reduce((a, b) => a + b, 0)/aWithoutFirstElement.length;
  const success = average>=a[0];
  let rating = 0;
  let ratingDescription = '';
  if (average < a[0] - 0.3) {
    rating = 1;
    ratingDescription = 'not too bad but could be better';
  } else if (average >= a[0] - 0.3 && average <= a[0] + 0.3) {
    rating = 2;
    ratingDescription = 'good job';
  } else {
    rating = 3;
    ratingDescription = 'excellent';
  }


    const result = printValues({ 
    periodLength:  aWithoutFirstElement.length,
    trainingDays:  aWithoutFirstElement.filter(x => x>0).length,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: a[0],
    average: average
  });
  return result;
};

export default calculateExercises;