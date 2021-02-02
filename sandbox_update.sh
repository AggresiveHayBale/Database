#!/bin/sh

#The script will archive the database with naming convention "mongodump_YYYY_MM__DD"
#
#The script require a connection string as a parameter to access the database
#usr - username
#pass - password
#server - cluster server names (should be 3)
#database - database name


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
    echo "No cluster server names specified";
    exit
fi
if [ -z "$4" ]
  then
    echo "No database specified";
    exit
fi


mongodump --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --archive="Sandbox" --db $database

mongorestore --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --archive="Sandbox" --nsFrom='SARSCoV2.*' --nsTo='Sandbox.*'

rm Sandbox
