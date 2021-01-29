#!/bin/sh

#The script will export database entries to the file.
#usr-username, pass-password, file-outputfile name, server-cluster server names, 
#list_fields - fields that would be exported(e.g. Sample_ID) if set to full it will export all of the possible fields, filter - the query what files should be exported (e.g.'{"Sample_ID": "XX0000"}')

usr=$1
pass=$2
server=$3
file=$4
list_fields=$5
filter=$6

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
    echo "No output file specified";
    exit 
fi

if [ $5="full" ]
	then
	mongoexport --host "$server" --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --query "$filter" --type json --out $file --pretty
elif [ -z "$6" ]
	then 
	mongoexport --host "$server" --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --fields $list_fields --type json --out $file --pretty
else 
	mongoexport --host "$server" --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --fields $list_fields --query "$filter" --type json --out $file --pretty
fi





