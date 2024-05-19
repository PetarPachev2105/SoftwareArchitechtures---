/**
 * This class represents a customer who can subscribe to training programs and receive notifications.
 */
class Customer {
    constructor(name) {
        this.name = name;
        this.trainingPrograms = [];
        this.notifications = [];
    }

    update(trainingProgramName, message) {
        this.notifications.push({ trainingProgramName, message });
        console.log(`Notification for ${this.name}: ${message}`);
    }

    subscribeToTrainingProgram(trainingProgram) {
        trainingProgram.subscribe(this);
        this.trainingPrograms.push(trainingProgram);
    }

    unsubscribeFromTrainingProgram(trainingProgram) {
        trainingProgram.unsubscribe(this);
        this.trainingPrograms = this.trainingPrograms.filter(tp => tp !== trainingProgram);
    }

    getTrainingPrograms() {
        return this.trainingPrograms;
    }

    getNotifications() {
        return this.notifications;
    }
}

export default Customer;
