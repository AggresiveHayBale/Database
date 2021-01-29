#!/bin/sh
# Simple script to automate connecting to the database. 
#It require only connection string

connection=$1

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi

mongo $connection
use SARSCoV2
