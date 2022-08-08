/ const number = 8;

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */


let result = '';

for (let i = 0; i <= number; i += 1) {
  result += i + 1 + ' ';

  if (i + 1 > number) {
    break;
  }
  console.log(result);
}