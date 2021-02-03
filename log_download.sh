#!/bin/sh
#Cluster is a variable that contains 3 server names in the cluster

user=$1
password=$2
cluster=$3

mongoexport --host $cluster\
 --username $user --password $password --authenticationDatabase admin --ssl --db local --collection oplog.rs --type json --out logs.json --pretty
