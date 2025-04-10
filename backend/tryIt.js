const notes = [12, 39, 37, 25, 42, 39, 46];

let total = notes.reduce((acc, num) => acc + num * 2, 10);
console.log(total);
