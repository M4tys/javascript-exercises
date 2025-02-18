const sumAll = function(x,y) {
    let sum = 0;

    if(x < 0 || y < 0) return "ERROR";
    if(!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR"; 

    const first = Math.min(x,y);
    const last = Math.max(x,y);

    for(let i = first; i <= last; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
