/**
 * This will be a singleton class cus there is only one fitness center
 * It will hold all of our training programs
 */
class FitnessCenter {
    constructor() {
        if (FitnessCenter.instance) {
            return FitnessCenter.instance;
        }
        this.trainingPrograms = [];
        FitnessCenter.instance = this;
    }

    addTrainingProgram(trainingProgram) {
        this.trainingPrograms.push(trainingProgram);
    }

    getTrainingPrograms() {
        return this.trainingPrograms;
    }
}

const fitnessCenter = new FitnessCenter();
Object.freeze(fitnessCenter);
export default fitnessCenter;
