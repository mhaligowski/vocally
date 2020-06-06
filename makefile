NPX=npx
WEBPACK=$(NPX) webpack

DIST=dist

run:
	npx webpack-dev-server

$(DIST):
	$(WEBPACK)

clean:
	rm -rf $(DIST)

.PHONY: run clean