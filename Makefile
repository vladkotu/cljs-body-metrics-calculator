# .RECIPEPREFIX +=
.DEFAUL_GOAL := info
shadow-cljs = ./node_modules/.bin/shadow-cljs
local = open http://localhost

loc.clean:
	@echo "Removing modules and caches"
	rm -rf node_modules
	rm -rf .shadow-cljs/
	rm -rf .cpcache/
	rm -rf target

js.clean
	@echo "Removing compiled js files"
	rm -rf public/app/js/*
	rm -rf public/devcards/js/*
	rm -rf public/tests/*

m2.clean:
	echo "Removing m2 modules"
	rm -rf ~/.m2/*

all.clean: loc.clean m2.clean js.clean

deps:
	@echo "Installing shadow-cljs deps"
	@${shadow-cljs} classpath > /dev/null

npm.deps:
	@echo "Installing node deps"
	@npm i

all.deps: npm.deps deps

info:
	${shadow-cljs} info

app.release:
	${shadow-cljs} -A:prod release app

app.watch:
	${shadow-cljs} -A:dev watch app
	${local}:3000

devcards.watch:
	${shadow-cljs} -A:dev watch devcards
	${local}:3001

test.watch:
	${shadow-cljs} -A:dev watch test
	${local}:3002


