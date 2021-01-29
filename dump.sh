#!/bin/sh

#The script will archive the database with naming convention "mongodump_YYYY_MM__DD"
#
#The script require a connection string as a parameter to access the database
#usr - username 
#pass - password 
#database - database name
#server - cluster server names (should be 3)


usr=$1
pass=$2
server=$3
database=$4
curr_date=$(date +"%Y_%m_%d")

#Sanity checks, check if MongoDB Database Tools were installed 
if ! command -v mongoimport
  then
    echo "MongoDB Database Tools could not be found, please install the tool"
    exit 
fi

mongodump --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --archive="mongodump_$curr_date" --db $database



