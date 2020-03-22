module.exports = function repeater(str, options) {

    let {
        repeatTimes = 1,
        separator = "+",
        addition = "",
        additionSeparator = "|",
        additionRepeatTimes = 1
    } = options;

    if (addition === null){
        addition = 'null';
    }

    const additionString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    const result = new Array(repeatTimes).fill(str + additionString).join(separator);
    return result;
};
