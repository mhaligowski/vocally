NPX=npx
WEBPACK=$(NPX) webpack

DIST=dist

run:
	$(NPX) webpack-dev-server \
		--config=./config/webpack.dev.js

$(DIST):
	$(WEBPACK) --config=./config/webpack.testing.js 

analyze:
	$(WEBPACK) --config=./config/webpack.analyze.js 

clean:
	rm -rf $(DIST)

test:
	$(NPX) jest

.PHONY: run clean test analyze