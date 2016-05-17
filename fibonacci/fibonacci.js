/* Optimized function for getting a Fibonacci sequence by given integer N, i.e. if N=3 then the result
* would be 1,2;  if N = 5, the result is 1,2,3,5

* The optimization is done via 'memoization', i.e. implementing a cache to save calculation time 
* of the recursive function calls
*/


var yourself = {
	memo: [],
	fibonacci: function (n) {
		if(this.memo[n]) {
			return this.memo[n];
		} else if (n < 2) {
			return n;
		} else {
			this.memo[n] = this.fibonacci(n-2) + this.fibonacci(n-1);
			return this.memo[n];
		}
	}
}

yourself.fibonacci(3);