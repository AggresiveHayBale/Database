#!/bin/sh

#The script will export database entries to the file.
#usr-username, pass-password, file-outputfile name, server-cluster server names, 
#list_fields - fields that would be exported(e.g. Sample_ID), filter - the query what files should be exported (e.g.'{"Sample_ID": "XX0000"}')

usr=$1
pass=$2
server=$3
file=$4
list_fields=$5
filter=$6

#Sanity checks, check if MongoDB Database Tools were installed 
if ! command -v mongoimport &> /dev/null
  then
    echo "MongoDB Database Tools could not be found, please install the tool"
    exit 
fi

mongoexport --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --fields $list_fields --query $filter --type json --out $file --pretty
