db.routineseq.aggregate(
[{$set: {
  PLZ: {
     $convert:{
      input: "$PLZ",
      to:"int",
      onError: "$PLZ",
      onNull: "$PLZ"
     },

      }
}}, {$match: {
  PLZ: {
    $lt: 10000
  }
}}, {$set: {
  PLZ: {
    $toString: '$PLZ'
  }
}}, {$set: {
  PLZ: {
    $concat: [
      '0',
      '$PLZ'
    ]
  }
}}, {$merge: {
  into: 'routineseq',
  on: '_id'
}}]
)
