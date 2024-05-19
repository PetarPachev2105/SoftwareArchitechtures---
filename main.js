import FitnessCenter from './FitnessCenter.js';
import TrainingProgram from './TrainingProgram.js';
import Customer from './Customer.js';
import ExerciseDecorator from './ExcerciseDecorator.js';
import TrainingStrategy from './TrainingStrategy/TrainingStrategy.js';
import CardioStrategy from './TrainingStrategy/Strategies/CardioStrategy.js';
import PushPullLegsStrategy from './TrainingStrategy/Strategies/PushPullLegsStrategy.js';

const fitnessCenter = FitnessCenter;

const pushPullLegsProgram = new TrainingProgram('Push Pull Legs');
const broSplitProgram = new TrainingProgram('Bro Split');
const upperLowerBodyProgram = new TrainingProgram('Upper Lower Body');
const onlyCardioProgram = new TrainingProgram('Only Cardio');

fitnessCenter.addTrainingProgram(pushPullLegsProgram);
fitnessCenter.addTrainingProgram(broSplitProgram);
fitnessCenter.addTrainingProgram(upperLowerBodyProgram);
fitnessCenter.addTrainingProgram(onlyCardioProgram);

// Get all training programs available
const trainingProgramsAvailable = fitnessCenter.getTrainingPrograms();
trainingProgramsAvailable.forEach((program) => {
    console.log(program.name);
});

console.log();

// Even if we initialize new fitness center it will return the same training programs because it is singleton
const fitnessCenter2 = FitnessCenter;
const trainingProgramsAvailable2 = fitnessCenter2.getTrainingPrograms();
trainingProgramsAvailable2.forEach((program) => {
    console.log(program.name);
});

console.log();

const pesho = new Customer('Pesho');
const ivan = new Customer('Ivan');
const mitko = new Customer('Mitko'); // Mitko has just only subscribed to the gym, but he is not going
const slavi = new Customer('Slavi');
const customers = [pesho, ivan, mitko, slavi];

pesho.subscribeToTrainingProgram(pushPullLegsProgram);
ivan.subscribeToTrainingProgram(broSplitProgram);
slavi.subscribeToTrainingProgram(onlyCardioProgram);

// Now print all customers and their training programs
customers.forEach((customer) => {
    console.log(customer.name);
    console.log(customer.getTrainingPrograms().map(tp => tp.name));
});

console.log();

// Now lets change ivan's training program from bro split to upper lower body as he has some brain cells
ivan.unsubscribeFromTrainingProgram(broSplitProgram);
ivan.subscribeToTrainingProgram(upperLowerBodyProgram);

// Now print all customers and their training programs
customers.forEach((customer) => {
    console.log(customer.name);
    console.log(customer.getTrainingPrograms().map(tp => tp.name));
});

console.log();

const decoratedPPL = new ExerciseDecorator(pushPullLegsProgram);
decoratedPPL.addExercise('Bench Press');
decoratedPPL.addExercise('Dumbbell Press');

const decoratedBroSplit = new ExerciseDecorator(broSplitProgram);
decoratedBroSplit.addExercise('Biceps Curls');
decoratedBroSplit.addExercise('Triceps Extensions');

const decoratedCardio = new ExerciseDecorator(onlyCardioProgram);
decoratedCardio.addExercise('Canceling membership');
decoratedCardio.addExercise('Finding better program');

// Now print all training programs and their exercises
trainingProgramsAvailable.forEach((program) => {
    console.log(program.name);
    console.log(program.exercises);
});

console.log();

const trainingStrategy = new TrainingStrategy();

trainingStrategy.setStrategy(new CardioStrategy());

console.log(trainingStrategy.executeStrategy());

trainingStrategy.setStrategy(new PushPullLegsStrategy());

console.log(trainingStrategy.executeStrategy());

console.log();

pushPullLegsProgram.sendMessage('Skip leg day');
broSplitProgram.sendMessage('Do not come');
onlyCardioProgram.sendMessage('Do not come');

// Now print all customers and their notifications
customers.forEach((customer) => {
    console.log(customer.name);
    console.log(customer.getNotifications().map(n => n.message));
});


