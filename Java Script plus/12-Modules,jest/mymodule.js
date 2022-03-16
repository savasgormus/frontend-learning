function add(n1,n2){
    return n1+n2;
};

const WORKING_HOURS_WEEK = 40;

let counter = 0;

function inc(amount = 1){
    counter += amount;
    return counter
}

function dec(amount = 1){
    counter -= amount;
    return counter
}

let localCounter = 5;

const moduleName = 'My Module 1';
// export default moduleName;  //1. yöntem
// export default "My Module 1";  //2. yöntem

export default (num) => num * num;
export {
    WORKING_HOURS_WEEK,
    WORKING_HOURS_WEEK as WHW,
    add as sum,
    dec, inc
};
console.log(`${moduleName} is loaded`);