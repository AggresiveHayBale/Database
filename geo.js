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
db.routineseq.updateMany({Location:"gotha"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.696220397949219,
  "Lat": 50.94609863604379
}
}})
db.routineseq.updateMany({Location:"tanna"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.861114501953125,
  "Lat": 50.49311858224733
}
}})
db.routineseq.updateMany({Location:"wasungen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.369720458984375,
  "Lat": 50.66447857675186
}
}})
db.routineseq.updateMany({Location:"wutha-farnroda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.390491485595703,
  "Lat": 50.95496653774911
}
}})
db.routineseq.updateMany({Location:"greußen clingen großenehrich"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.949077606201172,
  "Lat": 51.228602886556295
}
}})
db.routineseq.updateMany({Location:"rastenberg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.420116424560545,
  "Lat": 51.175684029532064
}
}})
db.routineseq.updateMany({Location:"kahla"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.588172912597656,
  "Lat": 50.80197499369227
}
}})
db.routineseq.updateMany({Location:"crossen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.984024047851562,
  "Lat": 50.96458954077095
}
}})
db.routineseq.updateMany({Location:"mylau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.267909049987793,
  "Lat": 50.618048446494534
}
}})
db.routineseq.updateMany({Location:"weida"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.06144332885742,
  "Lat": 50.77348757530155
}
}})
db.routineseq.updateMany({Location:"krölpa"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.539421081542969,
  "Lat": 50.67709876697171
}
}})
db.routineseq.updateMany({Location:"schlotheim"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.661544799804688,
  "Lat": 51.249130209480654
}
}})
db.routineseq.updateMany({Location:"unterwellenborn"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.436080932617188,
  "Lat": 50.65871132615369
}
}})
db.routineseq.updateMany({Location:"bad bibra"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.583709716796875,
  "Lat": 51.20656075093558
}
}})
db.routineseq.updateMany({Location:"bürgel"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.757087707519531,
  "Lat": 50.94220487644014
}
}})
db.routineseq.updateMany({Location:"leinefelde"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.326805114746094,
  "Lat": 51.38849461063877
}
}})
db.routineseq.updateMany({Location:"marolterode"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.680856704711914,
  "Lat": 51.23161270058763
}
}})
db.routineseq.updateMany({Location:"crock"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.885863304138184,
  "Lat": 50.45166015193687
}
}})
db.routineseq.updateMany({Location:"bad frankenhausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.098594665527342,
  "Lat": 51.35570324008831
}
}})
db.routineseq.updateMany({Location:"ummerstadt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.811748504638672,
  "Lat": 50.25801635646916
}
}})
db.routineseq.updateMany({Location:"dingelstädt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.321483612060547,
  "Lat": 51.315592999493774
}
}})
db.routineseq.updateMany({Location:"naumburg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.810302734375,
  "Lat": 51.15092468369808
}
}})
db.routineseq.updateMany({Location:"westgreußen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.919466018676758,
  "Lat": 51.23773921373903
}
}})
db.routineseq.updateMany({Location:"voigtstedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.307506561279297,
  "Lat": 51.39208308934901
}
}})
db.routineseq.updateMany({Location:"roßleben-wiehe"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.43470764160156,
  "Lat": 51.29692012275674
}
}})
db.routineseq.updateMany({Location:"artern"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.292228698730469,
  "Lat": 51.3621347716774
}
}})
db.routineseq.updateMany({Location:"neuengönna"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.648340225219727,
  "Lat": 50.987665811292516
}
}})
db.routineseq.updateMany({Location:"heldrungen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.219015121459961,
  "Lat": 51.298932651452496
}
}})
db.routineseq.updateMany({Location:"auerbach/vogtl."},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.398200035095215,
  "Lat": 50.509073609738834
}
}})
db.routineseq.updateMany({Location:"bad köstritz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.011833190917969,
  "Lat": 50.93008887202655
}
}})
db.routineseq.updateMany({Location:"barchfeld-immelborn"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.294253826141357,
  "Lat": 50.79787930029144
}
}})
db.routineseq.updateMany({Location:"bergen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.275419235229492,
  "Lat": 50.47252877160703
}
}})
db.routineseq.updateMany({Location:"berka/werra"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.067682266235352,
  "Lat": 50.9391491283791
}
}})
db.routineseq.updateMany({Location:"eisfeld"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.908823013305664,
  "Lat": 50.42683872471135
}
}})
db.routineseq.updateMany({Location:"elleben"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.09292984008789,
  "Lat": 50.86111905256077
}
}})
db.routineseq.updateMany({Location:"elsterberg"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.16880679130554,
  "Lat": 50.60840150229049
}
}})
db.routineseq.updateMany({Location:"gebesee"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.16880679130554,
  "Lat": 50.60840150229049
}
}})
db.routineseq.updateMany({Location:"gefell"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.861114501953125,
  "Lat": 50.4373907029876
}
}})
db.routineseq.updateMany({Location:"großrudestedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.099967956542969,
  "Lat": 51.09198710293626
}
}})
db.routineseq.updateMany({Location:"ilmenau"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.913200378417969,
  "Lat": 50.686235407574976
}
}})
db.routineseq.updateMany({Location:"kaulsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.431617736816406,
  "Lat": 50.621152476382164
}
}})
db.routineseq.updateMany({Location:"königsee"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.097908020019531,
  "Lat": 50.66132299907784
}
}})
db.routineseq.updateMany({Location:"langenleuba-niederhain"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.586383819580078,
  "Lat": 50.95637226922794
}
}})
db.routineseq.updateMany({Location:"lehesten"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.579160690307617,
  "Lat": 50.98156009203553
}
}})
db.routineseq.updateMany({Location:"lengenfeld"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.36562728881836,
  "Lat": 50.56982801149406
}
}})
db.routineseq.updateMany({Location:"lobenstein"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.639328002929688,
  "Lat": 50.44985322241888
}
}})
db.routineseq.updateMany({Location:"meuselwitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.297649383544922,
  "Lat": 51.04700610516692
}
}})
db.routineseq.updateMany({Location:"mohlsdorf-teichwolframsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.247095108032227,
  "Lat": 50.720373288220316
}
}})
db.routineseq.updateMany({Location:"probstzella"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.380205154418944,
  "Lat": 50.531543446202086
}
}})
db.routineseq.updateMany({Location:"rochlitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.798213958740233,
  "Lat": 51.04592688738677
}
}})
db.routineseq.updateMany({Location:"straußfurt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.989675521850586,
  "Lat": 51.16222951198837
}
}})
db.routineseq.updateMany({Location:"unterbreizbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 9.97833251953125,
  "Lat": 50.817215413611876
}
}})
db.routineseq.updateMany({Location:"weißensee"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.06649398803711,
  "Lat": 51.19849391807914
}
}})
db.routineseq.updateMany({Location:"wurzbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.53839111328125,
  "Lat": 50.46427940826988
}
}})
db.routineseq.updateMany({Location:"leinefelde"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.326805114746094,
  "Lat": 51.38870885607338
}
}})
db.routineseq.updateMany({Location:"bad tennstedt"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.838356018066404,
  "Lat": 51.1537242325363
}
}})
db.routineseq.updateMany({Location:"oberzella"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.037899017333984,
  "Lat": 50.84098812882909
}
}})
db.routineseq.updateMany({Location:"pferdsdorf"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 9.96434211730957,
  "Lat": 50.798340422778814
}
}})
db.routineseq.updateMany({Location:"ruhla"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.366802215576172,
  "Lat": 50.89177288472538
}
}})
db.routineseq.updateMany({Location:"frankenblick"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.146831512451172,
  "Lat": 50.36932194982437
}
}})
db.routineseq.updateMany({Location:"großschwabhausen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.489381790161131,
  "Lat": 50.93755356949969
}
}})
db.routineseq.updateMany({Location:"kölleda"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 11.246051788330078,
  "Lat": 51.18784353547339
}
}})
db.routineseq.updateMany({Location:"chemnitz"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 12.919921874999998,
  "Lat": 50.830228205617445
}
}})
db.routineseq.updateMany({Location:"bauerbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.391263961791992,
  "Lat": 50.498250984068115
}
}})
db.routineseq.updateMany({Location:"breitungen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.333328247070312,
  "Lat": 50.75817859508893
}
}})
db.routineseq.updateMany({Location:"großburschla"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.172181129455566,
  "Lat": 51.13643969024041
}
}})
db.routineseq.updateMany({Location:"jüterbog"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 13.077163696289062,
  "Lat": 51.991222950124396
}
}})
db.routineseq.updateMany({Location:"leimbach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.194282531738281,
  "Lat": 50.8129854753031
}
}})
db.routineseq.updateMany({Location:"seebach"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.417013168334961,
  "Lat": 50.9164816496951
}
}})
db.routineseq.updateMany({Location:"bad liebenstein"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 10.349121093749998,
  "Lat": 50.81764923177739
}
}})
db.routineseq.updateMany({Location:"bad salzuflen"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 8.750953674316406,
  "Lat": 52.08288179572668
}
}})
db.routineseq.updateMany({Location:"haina"},{$set:{
coordinates:{
  "type": "Point",
  "Long": 8.973426818847656,
  "Lat": 51.02779226886817
}
}})



db.routineseq.find({coordinates: null,PLZ:{$ne:""},PLZ:{$exist:{true}}},{Sample_ID:true, Location:true, PLZ:true})
db.routineseq.distinct("Location",{coordinates: null})
