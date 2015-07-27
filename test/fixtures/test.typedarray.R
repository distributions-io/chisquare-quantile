options( digits = 16 )
library( jsonlite )


k = 1
probs = seq( 0, 1, 0.01 )
y = qchisq( probs, k )

cat( y, sep = ",\n" )

data = list(
	k = k,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
