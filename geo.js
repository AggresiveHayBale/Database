db = db.getSiblingDB('SARSCoV2')

db.routineseq.update( {"Location" : "saalfeld/saale"}, { $set: {'Location': 'saalfeld'}},{ multi: true})

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

db.routineseq.updateMany({Location:"neustadt am rennsteig"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.933735370635986,
  "Lat": 50.58286874674231
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

db.routineseq.updateMany({Location:"arnstadt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.945558547973631,
  "Lat": 50.83434816702633
}
}})


db.routineseq.updateMany({Location:"aschersleben"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.457967758178711,
  "Lat": 51.75378844746659
}
}})

db.routineseq.updateMany({Location:"einhausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.461516380310059,
  "Lat": 50.530097622161925
}
}})

db.routineseq.updateMany({Location:"eisenberg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.89643383026123,
  "Lat": 50.96885978559673
}
}})

db.routineseq.updateMany({Location:"gera"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.078781127929688,
  "Lat": 50.875311142200765
}
}})

db.routineseq.updateMany({Location:"hohenleuben"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.052044868469238,
  "Lat": 50.70980298665239
}
}})

db.routineseq.updateMany({Location:"hummelshain"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.628749370574951,
  "Lat": 50.767326584540236
}
}})

db.routineseq.updateMany({Location:"langenwetzendorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.094981670379637,
  "Lat": 50.67987257805735
}
}})

db.routineseq.updateMany({Location:"leipzig"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.372579574584961,
  "Lat": 51.33608149100371
}
}})

db.routineseq.updateMany({Location:"netzschkau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.244670391082764,
  "Lat": 50.611281495877996
}
}})

db.routineseq.updateMany({Location:"neustadt an der orla"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.744384765625,
  "Lat": 50.73667242148789
}
}})

db.routineseq.updateMany({Location:"nobitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.485918998718262,
  "Lat": 50.97712889028522
}
}})

db.routineseq.updateMany({Location:"roemhild"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.539193153381346,
  "Lat": 50.396180915519565
}
}})

db.routineseq.updateMany({Location:"rudolstadt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.340036392211914,
  "Lat": 50.71934081883206
}
}})

db.routineseq.updateMany({Location:"saalfeld"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.359584331512451,
  "Lat": 50.64771894418296
}
}})


db.routineseq.updateMany({Location:"sulza"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.620080471038818,
  "Lat": 50.86696975036304
}
}})

db.routineseq.updateMany({Location:"walschleben"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.935580730438232,
  "Lat": 51.0644319902761
}
}})

db.routineseq.updateMany({Location:"waltershausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.556316375732422,
  "Lat": 50.89975798326458
}
}})

db.routineseq.updateMany({Location:"hoerselberg-hainich"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.429673194885254,
  "Lat": 50.98015512263256
}
}})


db.routineseq.updateMany({Location:"bad blankenburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.272337436676025,
  "Lat": 50.68289774882372
}
}})

db.routineseq.updateMany({Location:"geisa"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 9.950244426727295,
  "Lat": 50.716718787760264
}
}})

db.routineseq.updateMany({Location:"langenwolschendorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.957770586013794,
  "Lat": 50.63658279404718
}
}})

db.routineseq.updateMany({Location:"altenburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.433176040649414,
  "Lat": 50.98512636188829
}
}})

db.routineseq.updateMany({Location:"schleusingen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.754274129867554,
  "Lat": 50.50979684938849
}
}})

db.routineseq.updateMany({Location:"pößneck"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.595382690429688,
  "Lat": 50.69498968560211
}
}})

db.routineseq.updateMany({Location:"coburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.964527130126953,
  "Lat": 50.258126104855606
}
}})

db.routineseq.updateMany({Location:"heldburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.725510120391846,
  "Lat": 50.27946735926055
}
}})

db.routineseq.updateMany({Location:"buttstädt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.416897773742676,
  "Lat": 51.121828936924416
}
}})

db.routineseq.updateMany({Location:"sölden"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 7.809455394744873,
  "Lat": 47.93261905746725
}
}})

db.routineseq.updateMany({Location:"saalburg-ebersdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.732518672943113,
  "Lat": 50.502181808328416
}
}})

db.routineseq.updateMany({Location:"elxleben-sömmerda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.94789743423462,
  "Lat": 51.04688469442193
}
}})

db.routineseq.updateMany({Location:"bad salzungen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.232713,
  "Lat": 50.811654
}
}})

db.routineseq.updateMany({Location:"nordhausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.787753838178764,
  "Lat": 51.49463290747446
}
}})

db.routineseq.updateMany({Location:"tonna"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.734350681304932,
  "Lat": 51.087283404467804
}
}})

db.routineseq.updateMany({Location:"goldlauter"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.74564278125763,
  "Lat": 50.63054160018057
}
}})
db.routineseq.updateMany({Location:"schmölln"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.349748611450195,
  "Lat": 50.89534604722514
}
}})
db.routineseq.updateMany({Location:"frankenblick"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.119236946105957,
  "Lat": 50.39388283200593
}
}})
db.routineseq.updateMany({Location:"remptendorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.659841537475584,
  "Lat": 50.52840622459914
}
}})
db.routineseq.updateMany({Location:"themar"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.617105960845947,
  "Lat": 50.504829470820944
}
}})
db.routineseq.updateMany({Location:"sollstedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.537261962890623,
  "Lat": 51.41443779146823
}
}})
db.routineseq.updateMany({Location:"veilsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.810375213623047,
  "Lat": 50.408189325313096
}
}})
db.routineseq.updateMany({Location:"grabfeld"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.440444946289062,
  "Lat": 50.45389736980437
}
}})
db.routineseq.updateMany({Location:"hirschberg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.820216178894043,
  "Lat": 50.40359421123975
}
}})

db.routineseq.updateMany({Location:"berlin"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 13.379459381103516,
  "Lat": 52.52415927884915
}
}})
db.routineseq.updateMany({Location:"ziegenrück"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.65001392364502,
  "Lat": 50.61344648135313
}
}})
db.routineseq.updateMany({Location:"zeulenroda-triebes"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.980290412902832,
  "Lat": 50.64891625912045
}
}})
db.routineseq.updateMany({Location:"berlstedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.245193481445312,
  "Lat": 51.061465197550305
}
}})
db.routineseq.updateMany({Location:"wunsiedel"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.002735137939453,
  "Lat": 50.03828906000424
}
}})
db.routineseq.updateMany({Location:"bad colberg-heldburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.799689292907715,
  "Lat": 50.276148846209104
}
}})
db.routineseq.updateMany({Location:"kaltennordheim"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.15784740447998,
  "Lat": 50.6268154416189
}
}})
db.routineseq.updateMany({Location:"großbreitenbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.997893810272217,
  "Lat": 50.581996751705184
}
}})
db.routineseq.updateMany({Location:"geratal"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.848312377929688,
  "Lat": 50.71896042963921
}
}})

db.routineseq.updateMany({Location:"münchenbernsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.848312377929688,
  "Lat": 50.71896042963921
}
}})

db.routineseq.updateMany({Location:"vacha"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.023093223571777,
  "Lat": 50.8255657054318
}
}})

db.routineseq.updateMany({Location:"ellrich"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.665514469146729,
  "Lat": 51.587216426382035
}
}})
db.routineseq.updateMany({Location:"treuen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.306747436523438,
  "Lat": 50.53885372703046
}
}})
db.routineseq.updateMany({Location:"zwickau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.495918273925781,
  "Lat": 50.717764900646586
}
}})
db.routineseq.updateMany({Location:"bad sulza"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.625080108642578,
  "Lat": 51.087997750516124
}
}})

db.routineseq.updateMany({Location:"neuhaus am rennweg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.138720512390137,
  "Lat": 50.50998789197456
}
}})

db.routineseq.updateMany({Location:"bilzingsleben kannawurf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.067953109741211,
  "Lat": 51.28135358796176
}
}})

db.routineseq.updateMany({Location:"gerstungen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.064506530761719,
  "Lat": 50.96377869044724
}
}})
db.routineseq.updateMany({Location:"ronneburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.181262969970701,
  "Lat": 50.86279849464914
}
}})
db.routineseq.updateMany({Location:"föritztal"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.231803894042969,
  "Lat": 50.33647671038328
}
}})
db.routineseq.updateMany({Location:"triptis"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.863861083984375,
  "Lat": 50.73547734438833
}
}})
db.routineseq.updateMany({Location:"trebgast"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.551094055175781,
  "Lat": 50.06821366398788
}
}})
db.routineseq.updateMany({Location:"naila"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.708679199218748,
  "Lat": 50.32913511022061
}
}})
db.routineseq.updateMany({Location:"kirschkau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.887636184692383,
  "Lat": 50.604486334677134
}
}})
db.routineseq.updateMany({Location:"dermbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.119781494140625,
  "Lat": 50.71580851469203
}
}})
db.routineseq.updateMany({Location:"berga/elster"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.160749435424803,
  "Lat": 50.75027785362307
}
}})
db.routineseq.updateMany({Location:"falkenstein/vogtl."},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.370433807373047,
  "Lat": 50.47673484653018
}
}})
db.routineseq.updateMany({Location:"brahmenau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.159976959228516,
  "Lat": 50.92224423959913
}
}})

db.routineseq.updateMany({Location:"kamsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.441831588745117,
  "Lat": 50.64499766039238
}
}})
db.routineseq.updateMany({Location:"mertendorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.786999702453613,
  "Lat": 50.99179887334924
}
}})
db.routineseq.updateMany({Location:"chursdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.853389739990234,
  "Lat": 50.663662499406755
}
}})
db.routineseq.updateMany({Location:"grammetal"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.219873428344727,
  "Lat": 50.95761576547442
}
}})
db.routineseq.updateMany({Location:"zeitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.135086059570312,
  "Lat": 51.04894863380694
}
}})
db.routineseq.updateMany({Location:"bad klosterlausnitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.867959499359129,
  "Lat": 50.91637342521736
}
}})
db.routineseq.updateMany({Location:"rosenthal am rennsteig"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.6839599609375,
  "Lat": 50.41806184284324
}
}})
db.routineseq.updateMany({Location:"worbis"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.362510681152344,
  "Lat": 51.41878698731156
}
}})
db.routineseq.updateMany({Location:"großfahner"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.827090740203856,
  "Lat": 51.055767073773914
}
}})

db.routineseq.updateMany({Location:"erfurt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.025123596191406,
  "Lat": 50.97753420069911
}
}})
db.routineseq.updateMany({Location:"ebeleben"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.731925964355469,
  "Lat": 51.28468204923537
}
}})
db.routineseq.updateMany({Location:"artern/unstrut"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.295146942138672,
  "Lat": 51.36256350834222
}
}})
db.routineseq.updateMany({Location:"hermsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.857852935791016,
  "Lat": 50.89610395554359
}
}})
db.routineseq.updateMany({Location:"lehnstedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.436853408813477,
  "Lat": 50.940311958833696
}
}})
db.routineseq.updateMany({Location:"camburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.705524921417236,
  "Lat": 51.05139016883385
}
}})
db.routineseq.updateMany({Location:"waldems"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 8.375701904296873,
  "Lat": 50.26783783575824
}
}})
db.routineseq.find({coordinates: null},{Location:true,_id:true})

