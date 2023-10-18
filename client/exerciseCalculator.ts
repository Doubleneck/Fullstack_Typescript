interface exerciseValues {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: String,
    target: number,
    average: number 
    }
  
function printValues(pt: exerciseValues) {
    console.log(pt);
   
}    
    const calculateExercises= (a: number[],b:number) => {
        
        const average = a.reduce((a, b) => a + b, 0)/a.length  
        const success = average>=b;
        let rating = 0;
        let ratingDescription = "";
        if (average < b - 0.3) {
            rating = 1;
            ratingDescription = 'not too bad but could be better';
          } else if (average >= b - 0.3 && average <= b + 0.3) {
            rating = 2;
            ratingDescription = 'good job';
          } else {
            rating = 3;
            ratingDescription = "excellent";
          }

        printValues({ 
            periodLength: a.length,
            trainingDays: a.filter(x => x>0).length,
            success: success,
            rating: rating,
            ratingDescription: ratingDescription,
            target: b,
            average: a.reduce((a, b) => a + b, 0)/a.length  
            });
      
    }
    
    calculateExercises([3, 0, 2, 4.5, 0, 3, 1],1.6)