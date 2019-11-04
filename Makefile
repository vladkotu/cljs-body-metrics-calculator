# .RECIPEPREFIX +=
.DEFAUL_GOAL := info
shadow-cljs = ./node_modules/.bin/shadow-cljs

loc.clean:
	@echo "Removing modules and caches"
	rm -rf node_modules
	rm -rf public/js/*
	rm -rf .shadow-cljs/
	rm -rf .cpcache/
	rm -rf target

m2.clean:
	echo "Removing m2 modules"
	rm -rf ~/.m2/*

all.clean: loc.clean m2.clean

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

test.watch:
	${shadow-cljs} -A:dev watch test

devcards.watch:
	${shadow-cljs} -A:dev watch devcards
