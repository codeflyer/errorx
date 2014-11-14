test:
	@NODE_ENV="test" \
	./node_modules/.bin/mocha --reporter spec -u tdd "test/**/test.*.js"

cover:
	@NODE_ENV="test" \
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -u exports -R spec "test/**/test.*.js"

.PHONY: test