# Database
[toc]

## import.sh
The script will import new data to the database. 

The required parameters in order are: 

Username, Password, File with new data, Server cluster string

## dump.sh
The script will download to archive the database on a computer. 

The required parameters in order are: 

Username, Password, Database name, Server cluster string

## field_conversions.sh
The script will:

1. Add ISO date based on Isolation_Date, as a new field 'Date' used by charts. 

It will omit any entry where Isolation_Date is uncertain (0,"",20200000,20210000)

2. Remove Date from other uncertain elements by searching strings for 0000 

3. Will coerce data type and format to the schema:

a)change to lowercase fields : Location, Status, RKI_Valid, RKI_Submit

b)change to uppercase field : Sample_Type, Seq_Reason 

c)change to integer fields : Isolation_Date, Submitting_Lab, Sequencing_Lab, Ct_Value, Analysing_Date, Ambiguous_Bases,Query_Length,Submitting_Lab

d)change to double fields : ACGT_Nucleotide_Identity, ACGT_Nucleotide_Identity_ignoring_Ns,

e)change to strings fields : Sample_ID, Location, Sub_Location, Status, Primer, Seq_Reason, Sample_Type, Mutations, Storage, File_Name, GISAID_ID, Comments

The required parameters is connection string to the database

## geo.sh
The script will add new fields to the database with coordinates required for map chart. 

Current locations in the database:
   
    "eisenach",
  	 "greiz",
  	 "heiligenstadt",
  	 "hildburghausen",
  	 "jena",
  	 "meiningen",
  	 "mühlhausen",
  	 "neustadt",
  	 "sondershausen",
  	 "stadtroda",
  	 "suhl",
  	 "wartburgkreis",
  	 "weimar"
