#!/bin/sh

#The script will export database entries to the file.
#usr-username, pass-password, file-outputfile name, server-cluster server names, 
#list_fields - fields that would be exported(e.g. Sample_ID), filter - the query what files should be exported (e.g.'{"Sample_ID": "XX0000"}')

usr=$1
pass=$2
file=$3
server=$4
list_fields=$5
filter=$6

mongoexport --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --fields $list_fields --query $filter --type json --out $file --pretty
