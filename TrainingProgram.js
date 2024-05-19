/**
 * TrainingProgram class
 * This will hold all customers that are subscribed to this training program and
 * all exercises that are part of this training program
 * We will also notify all customers that are subscribed to this training program
 */
class TrainingProgram {
    constructor(name) {
        this.name = name;
        this.customers = [];
        this.exercises = [];
    }

    // Using observer pattern we will notify all customers that are subscribed to this training program
    subscribe(customer) {
        this.customers.push(customer);
    }

    unsubscribe(customer) {
        this.customers = this.customers.filter(c => c !== customer);
    }

    notify(message) {
        this.customers.forEach(customer => customer.update(this.name, message));
    }

    sendMessage(newDetails) {
        this.notify(`Training program '${this.name}' has been updated: ${newDetails}`);
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
        this.notify(`Exercise added to training program '${this.name}': ${exercise}`);
    }
}

export default TrainingProgram;
