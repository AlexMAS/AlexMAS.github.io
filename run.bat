@echo off

if exist _site del _site /Q
bundle exec jekyll serve -w
