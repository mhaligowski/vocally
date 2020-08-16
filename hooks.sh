#!/usr/bin/env bash

for filename in $(find ./hooks/ -type f -exec basename {} \;) 
do
    ln -s -f -v ./hooks/$filename ./.git/hooks/$filename
done