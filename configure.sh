#!/bin/bash
    file="package.json"
    if [ -e "$file" ]; then
      npm install
      jasmine init
      npm test
    echo "File exists"
    else
    echo "File does not exist"
    exit 1
    fi