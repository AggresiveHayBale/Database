# Database

## import.sh
The script will import new data to the database. 

Parameters(in order): 
```usr``` - username 
```pass``` - password 
```server``` - cluster server names (should be 3)
```file``` - JSON file with new data


## export.sh
The script will export database entries to the file.

Parameters(in order): 
```usr``` - username, 
```pass``` - password, 
```server``` - cluster server names, 
```file``` - outputfile name with format type (xxx.json), 
```list_fields``` - fields that would be exported(e.g. Sample_ID), 
```filter``` - the query what files should be exported (e.g.'{"Sample_ID": "XX0000"}')


## dump.sh
The script will archive the database on the computer. 

The required parameters for the script in order are: 

Parameters(in order): 
```usr``` - username 
```pass``` - password 
```server``` - cluster server names (should be 3)
```database``` - database name

## field_mod_exec.sh
The wrapper function to execute field_conversions.js and geo.js. 

Parameter(in order): 
```connection``` - connection string to log into database

## field_conversions.js
The script will:

1. Add ISO date based on Isolation_Date, as a new field 'Date' used by charts. 

2. Remove Date from any uncertain elements by searching strings for 0000 

3. Will coerce data type and format to the schema:
```
a) change to lowercase fields : Location, Status, RKI_Valid, RKI_Submit

b) change to uppercase field : Sample_Type, Seq_Reason 

c) change to integer fields : Isolation_Date, Submitting_Lab, Sequencing_Lab, Ct_Value, Analysing_Date, Ambiguous_Bases, Query_Length, Submitting_Lab

d) change to double fields : ACGT_Nucleotide_Identity, ACGT_Nucleotide_Identity_ignoring_Ns,

e) change to strings fields : Sample_ID, Location, Sub_Location, Status, Primer, Seq_Reason, Sample_Type, Mutations, Storage, File_Name, GISAID_ID, Comments
```
The required parameter for the script is connection string to the database

## geo.js
The script will add new fields to the database with coordinates required for map chart. 

The required parameter for the script is connection string to the database

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
