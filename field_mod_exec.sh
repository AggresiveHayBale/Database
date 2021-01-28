#!/bin/sh
#Script to execute scripts for geo.js and fieldconv .

#geo.js:
#The script will add new array with geographical coordinates based on location.
#New coordinates need to be put manualy from the website http://geojson.io.
#
#The script require a connection string as a parameter to access the database
#connection - connection string to log into database*/
#
# Current locations in the database:
#    "eisenach",
#  	"greiz",
#  	"heiligenstadt",
#  	"hildburghausen",
#  	"jena",
#  	"meiningen",
#  	"mühlhausen",
#  	"neustadt",
#  	"sondershausen",
#  	"stadtroda",
# 	"suhl",
#  	"wartburgkreis",
#  	"weimar"
#
#
#Helper commands that need to be executed manualy to detect new fields 
#
#Show unique locations
#db.routineseq.distinct("Location")
#Find new locations
#db.routineseq.find({coordinates: null},{Location:true,_id:false})

#field_conversions.js:
#The script will:
#1. Add ISO date based on Isolation_Date, as a new field 'Date' used by charts. 
#It will omit any entry where Isolation_Date is uncertain (0,"",20200000,20210000)
#2. Remove Date from other uncertain elements by searching strings for 0000 
#3. Will coerce data type and format to the schema:
#a)change to lowercase fields : Location, Status, RKI_Valid, RKI_Submit
#b)change to uppercase field : Sample_Type, Seq_Reason 
#c)change to integer fields : Isolation_Date, Submitting_Lab, Sequencing_Lab, Ct_Value, Analysing_Date, Ambiguous_Bases,Query_Length,Submitting_Lab
#d)hange to double fields : ACGT_Nucleotide_Identity, ACGT_Nucleotide_Identity_ignoring_Ns,
#e)change to strings fields : Sample_ID, Location, Sub_Location, Status, Primer, Seq_Reason, Sample_Type, Mutations, Storage, File_Name, GISAID_ID, Comments
#
#The script require a connection string as a parameter to access the database
#connection - connection string to log into database






if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi
connection=$1

mongo $connection <geo.js
mongo $connection <field_conversions.js
