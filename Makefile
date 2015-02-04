# This target updates all the files in the `loopback-sandbox` repository while
# keeping `README.md` and `Makefile` intact.
.PHONY: selfupdate
selfupdate:
	@echo 'Rebuilding the example. When asked for the application name, press <enter>'
	@rm -rf $(CURDIR)/*
	@slc loopback
	@git checkout README.md Makefile
	@git add -A :/
