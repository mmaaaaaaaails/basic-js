const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let sampleFloat = parseFloat(sampleActivity);
    if (typeof sampleActivity !== 'string' || sampleFloat >= MODERN_ACTIVITY || sampleFloat <= 0 || isNaN(sampleFloat)){
        return false;
    }
    const k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleFloat) / k);
    return age;
};








