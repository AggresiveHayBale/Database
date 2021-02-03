db = db.getSiblingDB('SARSCoV2') 

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

db.routineseq.updateMany({Location:"apolda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.512813568115234,
  "Lat": 51.02368940660312
}
}})

db.routineseq.updateMany({Location:"schleiz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.808907985687256,
  "Lat": 50.57741851285615
}
}})

db.routineseq.updateMany({Location:"sonneberg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.168975830078125,
  "Lat":  50.355482895378984
}
}})

db.routineseq.updateMany({Location:"sömmerda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.115717887878418,
  "Lat": 51.162660117344636
}
}})


db.routineseq.find({coordinates: null},{Location:true,_id:true})
