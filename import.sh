#!/bin/sh

#The script will import data to the database. It will update all fields with new values feed to the the script in JSON file.
#
#The script require a connection string as a parameter to access the database
#usr - username 
#pass - password 
#server - cluster server names (should be 3)
#file - JSON file with new data

usr=$1
pass=$2
server=$3
file=$4


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
    echo "No input file specified";
    exit 
fi

mongoimport --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --type json --mode merge --file $file
