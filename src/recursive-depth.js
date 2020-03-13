module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let countDepth = 1;
        arr.forEach(el => {
            if(Array.isArray(el)){
                countDepth = Math.max(countDepth, 1 + this.calculateDepth(el));
            }
        });
        return countDepth;
    }
};