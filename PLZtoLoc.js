db = db.getSiblingDB('SARSCoV2')
db.routineseq.aggregate(
[{$match: {
  PLZ: {
    $exists: true
  },
  Location: {
    $in: [
      null,
      ''
    ]
  }
}}, {$lookup: {
  from: 'GeoData',
  localField: 'PLZ',
  foreignField: 'PLZ',
  as: 'TempLoc'
}}, {$set: {
  Location: '$TempLoc.city'
}}, {$unwind: {
  path: '$Location'
}}, {$project: {
  TempLoc: 0
}}, {$merge: {
  into: 'routineseq',
  on: '_id'
}}]
