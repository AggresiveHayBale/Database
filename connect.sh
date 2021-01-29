#!/bin/sh
# Simple script to automate connecting to the database. 
#It require only connection string

connection=$1

#Sanity checks, check if MongoDB Database Tools were installed 
if ! command -v mongo &> /dev/null
  then
    echo "MongoDB Shell could not be found, please install the tool"
    exit 
fi

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 
fi

mongo $connection
use SARSCoV2
