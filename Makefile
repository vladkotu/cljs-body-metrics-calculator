# .RECIPEPREFIX +=
.DEFAUL_GOAL := info
shadow-cljs = ./node_modules/.bin/shadow-cljs
local = open http://localhost
app = public/app
target = target

all.clean: modules.clean m2.clean app.clean target.clean devcards.clean tests.clean

modules.clean:
	@echo "Removing modules and caches"
	rm -rf node_modules
	rm -rf .shadow-cljs/
	rm -rf .cpcache/

target.clean:
	rm -rf ${target}

tests.clean:
	rm -rf public/tests/*

tests.watch:
	${shadow-cljs} -A:dev watch test
	${local}:3002

m2.clean:
	echo "Removing m2 modules"
	rm -rf ~/.m2/*

deps: npm.deps
	@echo "Installing shadow-cljs deps"
	@${shadow-cljs} classpath > /dev/null

npm.deps:
	@echo "Installing node deps"
	@npm i

info:
	${shadow-cljs} info

app.clean:
	rm -rf ${app}/js/*

app.target:
	cp -r ${app}/* ${target}

app.release: app.target
	${shadow-cljs} -A:prod release app

app.watch:
	${shadow-cljs} -A:dev watch app
	${local}:3000

devcards.clean:
	rm -rf public/devcards/js/*

devcards.watch:
	${shadow-cljs} -A:dev watch devcards
	${local}:3001

deploy:
	cd ${target}
	git add --all
	git commit -m "deploy updates"
	git push origin gh-pages

cd: app.release deploy
