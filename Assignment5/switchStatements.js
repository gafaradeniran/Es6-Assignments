//function that adds two time values together with extra credit homework


const labels = ["second", "seconds", "minute", "minutes", "hour", "hours", "day", "days"];
let totaltime;
// checks validity of all inputs
const validateInputs = (num1, num2, lab1, lab2) =>{
    console.log();
    return num1 > -1 && num2 > -1 && typeof lab1 === "string" && typeof lab2 === "string" &&
        labels.indexOf(lab1.toLowerCase()) > 1 && labels.indexOf(lab2.toLowerCase()) > -1;
}

//  converts all inputs to seconds
const convertToSeconds = (val, label) => {
    label = label.toLowerCase();

    switch (label) {
        case "second":
        case "seconds":
            return val;
        case "minute":
        case "minutes":
            return val * 60;
        case "hour":
        case "hours":
            return val * 60 * 60;
        case "day":
        case "days":
            return val * 60 * 60 * 24;
        default:
            return 0;
    }
}

function timeAdder(value1, label1, value2, label2) {
    if (validateInputs(value1, value2, label1, label2)) {
        const output = [];
        let t1 = convertToSeconds(value1, label1);
        let t2 = convertToSeconds(value2, label2);

        if (t1 && t2)
            totaltime = t1 + t2;

        //convert total time format
        if (totaltime === 86400) {
            output.push(1, "day");
        } else if (totaltime % 86400 === 0 && totaltime > 86400) {
            const days = totaltime / 86400;
            output.push(days, "days");
        } else if (totaltime === 3600) {
            output.push(1, "hour");
        } else if (totaltime % 3600 === 0 && totaltime > 3600) {
            const hours = totaltime / 3600;
            output.push(hours, "hours");
        } else if (totaltime === 60) {
            output.push(1, "minute");
        } else if (totaltime % 60 === 0 && totaltime > 60) {
            const minutes = totaltime / 60;
            output.push(minutes, "minutes");
        } else if (totaltime === 1) {
            output.push(1, "second");
        } else {
            output.push(totaltime, "seconds");
        }
        return output;
    } else
        return false;
}

console.log(timeAdder(1, "second", 1, "minutes"));
console.log(timeAdder(5, "minutes", 15, "minutes"));
console.log(timeAdder(6, "minute", 0, "minutes"));
console.log(timeAdder(14, "hours", 3, "days"));
console.log(timeAdder(1, "minute", 60, "seconds"));
console.log(timeAdder(5, "days", 25, "hours"));
console.log(timeAdder(1, "seconds", 240, "minutes"));
console.log(timeAdder(6, "minute", 4, "hours"));

console.log(timeAdder(5, "hour", 5, "minutes"));
console.log(timeAdder(false, 0, 5, "minutes"));


console.log(timeAdder([], "days", 5, "minutes"));

