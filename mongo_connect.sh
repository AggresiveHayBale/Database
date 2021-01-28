#!/bin/sh
/* Simple script to automate connecting to the database. 
It require only connection string
*/

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi
connection=$1

mongo $connection
use SARSCoV2
