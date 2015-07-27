options( digits = 16 )
library( jsonlite )


k = 1
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qchisq( probs, k )

cat( y, sep = ",\n" )

data = list(
	k = k,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
