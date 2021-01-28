#!/bin/sh
/*
The script will:
1. Add ISO date based on Isolation_Date, as a new field 'Date' used by charts. 
It will omit any entry where Isolation_Date is uncertain (0,"",20200000,20210000)
2. Remove Date from other uncertain elements by searching strings for 0000 
3. Will coerce data type and format to the schema:
a)change to lowercase fields : Location, Status, RKI_Valid, RKI_Submit
b)change to uppercase field : Sample_Type, Seq_Reason 
c)change to integer fields : Isolation_Date, Submitting_Lab, Sequencing_Lab, Ct_Value, Analysing_Date, Ambiguous_Bases,Query_Length,Submitting_Lab
d)hange to double fields : ACGT_Nucleotide_Identity, ACGT_Nucleotide_Identity_ignoring_Ns,
e)change to strings fields : Sample_ID, Location, Sub_Location, Status, Primer, Seq_Reason, Sample_Type, Mutations, Storage, File_Name, GISAID_ID, Comments

The script require a connection string as a parameter to access the database
connection - connection string to log into database*/

connection=$1

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi

mongo $connection
use SARSCoV2

/* Date */
db.routineseq.find( {Isolation_Date: {$ne:[0,"","20200000","20210000"]}}).forEach(function(element){
  element.Date = ISODate(element.Isolation_Date);
  db.routineseq.save(element);
})

/*To remove Date when Isolation_Date is uncertain */
db.routineseq.updateMany(
  {Isolation_Date:{$regex: '0000'}},
  {$set: {Date:""}})


/*Coercing data to schema */
db.routineseq.update({},
  [{
    $set: {Location: {$toLower:"$Location" },
    Status: { $toLower: "$Status" },
    Seq_Reason: { $toUpper: "$Seq_Reason" },
    Sample_Type: { $toUpper: "$Sample_Type" },
    RKI_Valid: { $toLower: "$RKI_Valid"},
    RKI_Submit: { $toLower: "$RKI_Submit"},

/*Data type Change*/
/*Numeric data*/
  Isolation_Date:
    {
    $convert:{
      input: "$Isolation_Date",
      to:"int",
      onError: "$Isolation_Date",
      onNull: ""
     },
},
  Submitting_Lab:
    {
    $convert:{
      input: "$Submitting_Lab",
      to:"int",
      onError: "$Submitting_Lab",
      onNull: ""
    },
},
  Sequencing_Lab:
  {
  $convert:{
    input: "$Sequencing_Lab",
    to:"int",
    onError: "$Sequencing_Lab",
    onNull: ""
  },
},
Ct_Value:
  {
  $convert:{
    input: "$Ct_Value",
    to:"int",
    onError: "$Ct_Value",
    onNull: ""
  },
},
Analysing_Date:
  {
  $convert:{
    input: "$Analysing_Date",
    to:"int",
    onError: "$Analysing_Date",
    onNull: ""
  },
},
ACGT_Nucleotide_Identity:
  {
  $convert:{
    input: "$ACGT_Nucleotide_Identity",
    to:"double",
    onError: "$ACGT_Nucleotide_Identity",
    onNull: ""
  },
},
ACGT_Nucleotide_Identity_ignoring_Ns:
  {
  $convert:{
    input: "$ACGT_Nucleotide_Identity_ignoring_Ns",
    to:"double",
    onError: "$ACGT_Nucleotide_Identity_ignoring_Ns",
    onNull: ""
  },
},
Ambiguous_Bases:
  {
  $convert:{
    input: "$Ambiguous_Bases",
    to:"int",
    onError: "$Ambiguous_Bases",
    onNull: ""
  },
},
Query_Length:
  {
  $convert:{
    input: "$Query_Length",
    to:"int",
    onError: "$Query_Length",
    onNull: ""
  },
},
Submitting_Lab:
  {
  $convert:{
    input: "$Submitting_Lab",
    to:"int",
    onError: "$Submitting_Lab",
    onNull: ""
  },
},
/*Strings*/
Sample_ID:
  {
  $convert:{
    input: "$Sample_ID",
    to:"string",
    onError: "$Sample_ID",
    onNull: ""
  },
},
Location:
  {
  $convert:{
    input: "$Location",
    to:"string",
    onError: "$Location",
    onNull: ""
  },
},
Sub_Location:
  {
  $convert:{
    input: "$Sub_Location",
    to:"string",
    onError: "$Sub_Location",
    onNull: ""
  },
},
Status:
  {
  $convert:{
    input: "$Status",
    to:"string",
    onError: "$Status",
    onNull: ""
  },
},
Primer:
  {
  $convert:{
    input: "$Primer",
    to:"string",
    onError: "$Primer",
    onNull: ""
  },
},
Seq_Reason:
  {
  $convert:{
    input: "$Seq_Reason",
    to:"string",
    onError: "$Seq_Reason",
    onNull: ""
  },
},
Sample_Type:
  {
  $convert:{
    input: "$Sample_Type",
    to:"string",
    onError: "$Sample_Type",
    onNull: ""
  },
},
Mutations:
  {
  $convert:{
    input: "$Mutations",
    to:"string",
    onError: "$Mutations",
    onNull: ""
  },
},
Storage:
  {
  $convert:{
    input: "$Storage",
    to:"string",
    onError: "$Storage",
    onNull: ""
  },
},
File_Name:
  {
  $convert:{
    input: "$File_Name",
    to:"string",
    onError: "$File_Name",
    onNull: ""
  },
},
GISAID_ID:
  {
  $convert:{
    input: "$GISAID_ID",
    to:"string",
    onError: "$GISAID_ID",
    onNull: ""
  },
},
Comments:
  {
  $convert:{
    input: "$Comments",
    to:"string",
    onError: "$Comments",
    onNull: ""
  },
},

}}],
{ multi: true}
)
