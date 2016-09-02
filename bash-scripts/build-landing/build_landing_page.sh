#!/bin/bash

printf "\n\n\n\n\n\n"
printf "\n\n========== Build started =========\n\n"

## Start 'gulp inline' command
printf "==> Started gulp inline\n\n"

## Strip the slashes
if ! sed -i '.bak' 's/\/cms\//cms\//g' *.html; then echo "Stripping the slashes failed."; exit 1; fi
printf "==> Stripped the slashes\n\n"

## Create a new folder
if ! mkdir -p ladningPageBuild; then echo "Creating new landingPageBuild folder failed."; exit 1; fi
printf "==> Created a new folder 'ladningPageBuild'\n\n"

## Rename build.html to index.html
if ! mv build.html index.html; then echo "Renaming build.html to index.html failed."; exit 1; fi
printf "==> Renamed build.html to index.html\n\n"

## Copy 'cms' forlder and the html to the build folder
if ! cp -R index.html cms ladningPageBuild/; then echo "Copying the cms folder and the html file to the build folder failed."; exit 1; fi
printf "==> Copied the CMS folder content and the html file to the build folder\n\n"

## Clean up
if ! rm -R index.html build.html.bak; then echo "Cleaning up failed."; exit 1; fi
printf "==> Clean up files\n\n"

## Create a zip achive to be suitable for sending via email
if ! zip -R /lp_build.zip ./*; then echo "Creating ZIP failed."; exit 1; fi
printf "==> Created ZIP achive\n\n"


printf "\n\n Build Done Successfully!\n\n\n\n"
