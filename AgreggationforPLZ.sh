#!/bin/sh
#Script that return coordinates from PLZ if it detects entries without coordinates 

usr=$1
pass=$2
cluster=$3
server=$4

if [ -z "$1" ]
  then
    echo "No user specified";
    exit 
fi
if [ -z "$2" ]
  then
    echo "No password specified";
    exit 
fi
if [ -z "$3" ]
  then
    echo "No primary server name specified";
    exit 
fi
if [ -z "$4" ]
  then
    echo "No cluster server names specified";
    exit 
fi


mongo --host $server --authenticationDatabase admin --ssl --username $usr --password $pass <coord_agg.js

mongoexport --host $cluster\
 --username $usr --password $pass \
 --authenticationDatabase admin --ssl --db SARSCoV2 --collection NoCords \
 --type json --out NoCoordinates.json

mongo --host $server --authenticationDatabase admin --ssl --username $usr --password $pass
use SARSCoV2
db.NoCords.drop()
