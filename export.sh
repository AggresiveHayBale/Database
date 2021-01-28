#!/bin/sh

#The script will export database entries to the database.

usr=
pass=
file=.json
server=
list_fields=Sample_ID
filter='{"Sample_ID": "me40609"}'

mongoexport --host $server --username $usr --password $pass --authenticationDatabase admin --ssl --db SARSCoV2 --collection routineseq --fields $list_fields --query '{"Sample_ID": "me40609"}' --type json --out test.json --pretty
