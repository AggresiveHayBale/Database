#!/bin/sh
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
#  	"suhl",
#  	"wartburgkreis",
#  	"weimar"

connection=$1

if [ -z "$1" ]
  then
    echo "No connection string supplied";
    exit 1
fi

mongo $connection
use SARSCoV2

#Helper commands that need to be executed manualy to detect new fields 
#
#Show unique locations
#db.routineseq.distinct("Location")
#Find new locations
#db.routineseq.find({coordinates: null},{Location:true,_id:false})

db.routineseq.updateMany({Location:"weimar"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.327247619628906,
  "Lat": 50.98026319871142
}
}})

db.routineseq.updateMany({Location:"jena"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.58534049987793,
  "Lat": 50.928276608937466
}
}})

db.routineseq.updateMany({Location:"neustadt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.744384765625,
  "Lat": 50.73667242148789
}
}})

db.routineseq.updateMany({Location:"eisenach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.320110321044922,
  "Lat": 50.975723786793324
}
}})


db.routineseq.updateMany({Location:"greiz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.199630737304688,
  "Lat": 50.65642599320274
}
}})

db.routineseq.updateMany({Location:"heiligenstadt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.137634277343748,
  "Lat": 51.37799535545772
}
}})

db.routineseq.updateMany({Location:"hildburghausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.72437286376953,
  "Lat": 50.42711212169851
}
}})

db.routineseq.updateMany({Location:"meiningen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.416412353515623,
  "Lat": 50.56775642347258
}
}})

db.routineseq.updateMany({Location:"mühlhausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.458984375,
  "Lat": 51.208819210980344
}
}})

db.routineseq.updateMany({Location:"sondershausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.867538452148436,
  "Lat": 51.367708035278746
}
}})

db.routineseq.updateMany({Location:"stadtroda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.728076934814451,
  "Lat": 50.860035509432805
}
}})

db.routineseq.updateMany({Location:"suhl"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.690727233886719,
  "Lat": 50.608953004071786
}
}})

db.routineseq.updateMany({Location:"wartburgkreis"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.228271484374998,
  "Lat": 50.810056832051536
}
}})

   }
)
