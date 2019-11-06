# Solving problems

## Problem N° 1

### The program:

A ball is dropped and bounces. At each rebound, the ball reaches half the height of the previous rebound.

How high the ball must be dropped so it reaches exactly the height H after the sixth rebound?

### OUTPUT:

The height at which we must drop the ball.

### CONSTRAINTS:

1 ≤ H ≤ 10000

### EXAMPLE:

Input: 5
Output: 320

### Solution:

<!-- prettier-ignore -->
`function calculteHeight(h){
let totalH = h;
for (let i = 0; i < 6; i++)
{ totalH *= 2; }
return totalH;
}`

## Problem N° 2

You are given a single string. You need to convert each character into it's ASCII value and add the odd numbers together.

### example

Input: ABC

#### `A,B,C → 65,66,67`

Take odd numbers
`65+67=132`

### Solution:

Look at the script.js file
