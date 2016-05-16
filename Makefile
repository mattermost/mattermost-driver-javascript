.PHONY: clean build publish

build:
	@echo Building...

	npm install
	npm run build

publish:
	@echo Publishing


clean:
	@echo Cleaning...

	rm -f npm-debug.log
	rm -rf node_modules
	rm -rf lib
