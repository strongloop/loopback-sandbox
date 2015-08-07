# This target updates all the files in the `loopback-sandbox` repository while
# keeping `README.md` and `Makefile` intact.
.PHONY: selfupdate
selfupdate:
	@echo 'Rebuilding the repo. When asked for the app name, press <enter>'
	@rm -rf $(CURDIR)/*
	@slc loopback
	@git checkout README.md Makefile
	@git add -A :/
