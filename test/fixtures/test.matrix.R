options( digits = 16 )
library( jsonlite )

k = 3
probs = 0:24 / 25
y = qchisq( probs, k )

cat( y, sep = ",\n" )

data = list(
	k = k,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
