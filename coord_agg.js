db = db.getSiblingDB('SARSCoV2')
db.routineseq.aggregate(
  [{$match: {
    "coordinates":null,
  }}, {$lookup: {
    from: 'GeoData',
    localField: 'PLZ',
    foreignField: 'PLZ',
    as: 'Coordinates'
  }}, {$project: {
    Coordinates:true,
  }}, {$unwind: {
  path:"$Coordinates"
  }}, {$group: {
    _id: "$Coordinates"
  }}, {$out: 'NoCords'}])
