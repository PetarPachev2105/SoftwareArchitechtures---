class TrainingStrategy {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        return this.strategy.execute();
    }
}

export default TrainingStrategy;
