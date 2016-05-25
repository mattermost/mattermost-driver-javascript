.PHONY: clean build publish npminstall

BUILD_SERVER_DIR = ../platform

npminstall: package.json
	@echo Install

	npm install

test: npminstall
	cd $(BUILD_SERVER_DIR) && $(MAKE) internal-test-javascript-client

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
	rm -rf .tmp
