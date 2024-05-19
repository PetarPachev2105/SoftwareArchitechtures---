/**
 * Using decorator pattern we will add a new class ExerciseDecorator
 * This class will add an exercise to the training program
 */
class ExerciseDecorator {
    constructor(trainingProgram) {
        this.trainingProgram = trainingProgram;
    }

    // This method will add an exercise to the training program
    addExercise(exercise) {
        this.trainingProgram.exercises.push(exercise);
    }
}

export default ExerciseDecorator;
