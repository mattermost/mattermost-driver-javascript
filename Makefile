.PHONY: clean build publish npminstall

npminstall: package.json
	@echo Install

	npm install

build: npminstall
	@echo Building...

	npm run build

publish: npminstall
	@echo Publishing

	npm login
	npm publish


clean:
	@echo Cleaning...

	rm -f npm-debug.log
	rm -rf node_modules
	rm -rf lib
