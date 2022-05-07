const Helpers = {
    runAtRandomIntervals(callback, maxInterval){
        // This will run a callback function based on maximum seconds specified
        // Suggested value for maxInterval is 2000.
        let interval = maxInterval? maxInterval : 2000;
        setInterval(callback, 150 + Math.random() * interval);
    },
    async createDelay(ms){
        new Promise(resolve => setTimeout(resolve, ms))
    }

}

export default Helpers