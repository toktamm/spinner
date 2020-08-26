
const positions = ['|', '/', '-', '\\'];
// changes the delay in between prints: for(let time = 100, time <= 10000; time += 200)
let time = 100;
//repeat line 7 to 12, i many number of times
for (let i = 0; i < 11; i++) {
  for (const position of positions) {
    // console.log(position);
    setTimeout(() => {
      process.stdout.write(`\r${position}   `);
    }, time);
    time += 200;
  }
}
//stop

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// // ... fill in the rest yourself ...

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// // ... fill in the rest yourself ...

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 1700);