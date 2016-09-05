#!/bin/bash

printf "\n\n\n\n\n\n"
printf "\n\n========== Build started =========\n\n"

## Start 'gulp inline' command
#if ! gulp inline; then echo "Running gulp failed."; exit 1; fi
#printf "==> Started gulp inline\n\n"

## Wait for gulp to finish
#wait $gulp

## Create a new folder
if ! mkdir -p landingPageBuild; then echo "Creating new landingPageBuild folder failed."; exit 1; fi
printf "==> Created a new folder 'landingPageBuild'\n\n"

## Copy 'cms' forlder and the html to the build folder
if ! cp -r build.html cms landingPageBuild/; then echo "Copying the cms folder and the html file to the build folder failed."; exit 1; fi
printf "==> Copied the CMS folder content and the html file to the build folder\n\n"

## Strip the slashes
if ! sed -i '.bak' 's/\/cms\//cms\//g' landingPageBuild/build.html; then echo "Stripping the slashes failed."; exit 1; fi
printf "==> Stripped the slashes\n\n"

## Clean up .bak files
if ! rm -r landingPageBuild/build.html.bak; then echo "Cleaning up failed."; exit 1; fi
printf "==> Clean up .bak files\n\n"

## Rename build.html to index.html
if ! mv landingPageBuild/build.html landingPageBuild/index.html; then echo "Renaming build.html to index.html failed."; exit 1; fi
printf "==> Renamed build.html to index.html\n\n"

## Create a zip achive to be suitable for sending via email
if ! zip -r ../landingPageBuild.zip landingPageBuild/*; then echo "Creating ZIP failed."; exit 1; fi
printf "==> Created ZIP archive\n\n"

## Clean up
if ! rm -r landingPageBuild; then echo "Cleaning up failed."; exit 1; fi
printf "==> Clean up files\n\n"


printf "\n\n==- Build Done Successfully! -==\n\n\n\n"
