#!/bin/sh

#The script will export database to csv with limited fields and following the query {"Sample_ID":{"$regex":"vi"}, "RKI_Submit":{"$regex":"IMS"}}
#usr-username, pass-password, file-outputfile name, server-cluster server names,
#list_fields - fields that would be exported(e.g. Sample_ID) if set to full it will export all of the possible fields, filter - the query what files should be exported (e.g.'{"Sample_ID": "XX0000"}')


usr=$1
pass=$2
server=$3

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

mongoexport --host "$server"\
 --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq\
 --fields='Sample_ID,Isolation_Date,Sample_Type,RKI_Submit' --query '{"Sample_ID":{"$regex":"vi"}, "RKI_Submit":{"$regex":"IMS"}}'\
  --type csv --out rki_submition.csv
