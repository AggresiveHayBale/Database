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
file=$3
server=$4


mongoimport --host $3 --username $1 --password $2 --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --type json --mode merge --file $3
