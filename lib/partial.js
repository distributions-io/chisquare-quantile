'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( k )
*	Partially applies degrees of freedom `k` and returns a function for evaluating the quantile function for a Chi-squared distribution.
*
* @param {Number} k - degrees of freedom
* @returns {Function} quantile function
*/
function partial( k ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Chi-squared distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
