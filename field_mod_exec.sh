#!/bin/sh
#Script to execute scripts for geo.js and fieldconv .

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi
connection=$1

mongo $connection <geo.js
mongo $connection <field_conversions.js
