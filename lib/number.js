'use strict';

// MODULES //

var gammaincinv = require( 'compute-gammaincinv' );


// QUANTILE //

/**
* FUNCTION: quantile( p, k )
*	Evaluates the quantile function for a Chi-squared distribution with degrees of freedom `k` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} k - degrees of freedom
* @returns {Number} evaluated quantile function
*/
function quantile( p, k ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return 2 * gammaincinv( p, k/2 );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
