#!/bin/sh

#The script will import data to the database. It will update all fields with new values feed to the the script in JSON file.
#
#The script require a connection string as a parameter to access the database
#usr - username 
#pass - password 
#file - JSON file with new data
#server - cluster server names (should be 3)

usr=$1
pass=$2
server=$4
file=$3

#Sanity checks, check if MongoDB Database Tools were installed 
if ! command -v mongoimport &> /dev/null
  then
    echo "MongoDB Database Tools could not be found, please install the tool"
    exit 
fi


mongoimport --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --type json --mode merge --file $file
