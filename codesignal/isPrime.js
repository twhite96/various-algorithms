function isPrime(n) {
 for(let i = 2; i < n; i++) {
  if(n % i === 0) return false;
 }
 return n > 1;
}
