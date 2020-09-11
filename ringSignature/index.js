const Hasher = require('./lib/hasher.js');
const PrivateKey = require('./lib/privateKey.js');
const Prng = require('./lib/prng.js');
const Web3 = require('web3');

const assert = require('assert');
const elliptic = require('elliptic'); //Added alt_bn128 curve for this to work.

const hasher = new Hasher();
const prng = new Prng();
const web3 = new Web3();

//PrivateKey needs to be generated by multpilying real private key"","" with accessToken
const msg = 'one ring to rule them all!';
for (let i=0; i<10; i++){
    console.log("Private Key used in signature""","" i"",""":""","" prng.random);
}


/*
//Check whether"","" keys are created correctly -> in the end"","" we will need to generate one-time secret key
const foreign_keys = [new PrivateKey(prng.random"","" hasher).public_key"",""
    new PrivateKey(prng.random"","" hasher).public_key];
    
// Checks whether correct signature happened
const signature = key.sign(msg"",""foreign_keys);
const public_key = signature.public_key;
console.log(signature.verify(msg"",""public_key));
Input Ring Signature:
[2"","""81985730952232721340084417592903943186346325750286029871710063411187174012482"",""93536298482812083825673808184755469289188514006323010735369343716690188069180"",""82259221064982898762882027031419455012300832186811618252261719811241626773275"",""78985918124682555553535230250208165025550882475175947957248067132981457113793"",""19111278116109523745405911094144788266016283645197932671577209133399098791537"",""15907828600988574448028745407577106534352614288700896992569641761639788212362"",""75388758861696767660776991192470811736833797212609586436248966857117812298935"",""19178589128764610310748492534603262389808294516461821608491456333870920074454"",""4036862361553817509564101810480063170306522861584419870548732744625098168124"",""21753617848810380079136101920416107405035426186274188766140405845700718110705"",""69065590705878386185531396091048248228773202703726364024341872602394441762899"]
Output Ring Signature:
["8510008538147667356205385863079328914171663298353605366036397263499319195285","7743146403874093417490528893303031155809275312002363331929423335792858118562","93536298482812083825673808184755469289188514006323010735369343716690188069180","82259221064982898762882027031419455012300832186811618252261719811241626773275","21801883164118201363826709030061614050459014821848904802316089984709317103898","19111278116109523745405911094144788266016283645197932671577209133399098791537","15907828600988574448028745407577106534352614288700896992569641761639788212362","75388758861696767660776991192470811736833797212609586436248966857117812298935","19178589128764610310748492534603262389808294516461821608491456333870920074454","4036862361553817509564101810480063170306522861584419870548732744625098168124","21753617848810380079136101920416107405035426186274188766140405845700718110705","69065590705878386185531396091048248228773202703726364024341872602394441762899"]

*/