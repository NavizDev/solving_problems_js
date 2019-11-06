# Solving problems

## Problem 1.

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
