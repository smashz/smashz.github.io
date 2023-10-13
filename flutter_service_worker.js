'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/config": "6e24eb2f0f224aa1b229c3aadaae5dc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8fb4503c5fa8c8b9c45a46bf4e75f1c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbca8314fb98ac8f2bf1ff90b9b23041",
".git/logs/refs/heads/main": "3e14aafb8373f0dde9e4906581e11536",
".git/logs/refs/remotes/origin/main": "666f580dfaec9ae92f00086bd6ffcdd1",
".git/objects/00/04ef60888bb388f943a5c3e3776ba5e5f5fe3b": "456b4a489d8f6cd8a3b7b9a7234524c2",
".git/objects/00/b662c5d69f1a081efb00488c21803e2c10c302": "b2addf0a37e39e4ee999813cb05f896a",
".git/objects/01/313e9053252de343d334dfa3a0848e2a005751": "7ff063a83c9160ef16111dc5a6ad8ea3",
".git/objects/02/fad2c74cb896b9fda04717e1d20354c108db7a": "0d42e43933de301ff04ed35aeaa5c77c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/dcd61acee1d5f3f6d603972e362e81e52bc5d1": "96cc2864217119a15f800152efe6d4c5",
".git/objects/09/30f20caf0a905325548a221462a063ec3ecc16": "52b0b0aad30e52ccd13397480fff9b68",
".git/objects/09/6adf647ca181bdb1938a2e1ffce561f60b5b07": "fd4a9d0b1b6ea9ebb379e89347617dc7",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/d08bbb37da3049c64beb06ae04042e1f5b3355": "93313c96ef4743697cd56c20aca41382",
".git/objects/0b/a6b6f62a8ed75d55339158c64a4cbeffdb0d25": "4ed78af9146e88c5cfca62fd20164c48",
".git/objects/0c/9648b3390db4eee46da3323506615493198d55": "7eafae95dc72dbc46d82699eb2821675",
".git/objects/0c/aff80cda9b45e2185d2db8ab7f9fa9fe1d3f11": "f9dbc7e14c38f7e0263c58c1067257a9",
".git/objects/0c/c8d09793d5595258043212a9979685cb535133": "50919a86b1c208885331b8af7c5e99d7",
".git/objects/0e/e5b529d85ae2db206810a215e482383fa80c22": "2b6f77f7338ef2218ad8c62220ef7723",
".git/objects/0f/52de6d7b5ba8637370136d1674dd50aa502ce2": "0c3788a85e9884ae27b18c0faa3f308a",
".git/objects/0f/fcfba2e8bfeea6944bfbba39447991daeffc97": "be86291736b4013233e97f6fdfd08fb3",
".git/objects/13/6fdd3cdb0ad924330aefe36464d34ed6656b1a": "eb8fcbfc94737528a1b88b15774b18fb",
".git/objects/14/2f7fae3cfbe68072365ee3e2346a7cc63df556": "4354e5180ca02124dfad6701bb92d2ff",
".git/objects/17/316e78ee757bce9bd5a3ba4e56988febb1538c": "a8e9a3874bc39c79f1ae0ec20fd6b730",
".git/objects/19/7a472acc98b0f272e8c131e4d910750472fe2c": "2e36a0a5be47ffc0b0a104afcda60937",
".git/objects/1b/12ca6c7113d72b97c77cc4cb46e7e3ce178e5f": "9c95ea79874da5a1c10caff33b71a714",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1e/3dd295bf4b83d4aed3e3393a1e7c9f5499c38d": "60058649afb3ea2d2830a7bda550eaab",
".git/objects/1f/f76b453dddd4832e920c64299c1632498a6a10": "dd5f051a9668027fade3aaaf369028d0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/53ce7ff69bc470e6d5b237d122537d6d4035f7": "d9610b77cef8ddc5416b61e49e90d8be",
".git/objects/24/c6c20debf0238af42ef0882eaf0141ee070586": "b551b908aba7f05f32b37913ef617e81",
".git/objects/25/4c34088fe9ce471eee5765e8a173a1fecff9ba": "bd871d27284799fdbe0f18825c465dba",
".git/objects/26/cb8c6c67a8f6815d27e63c0e606077c26cb606": "2a322058760a759bd2ffa4de0a93e58e",
".git/objects/27/7d90cebb41803f488abadcd5e4746f2d27127f": "2fab0147f87411ec09630038cb2096d0",
".git/objects/28/9d020d9e586811aa9cf214ca5234338f897859": "adcf52dbcdb4d7664abcf437ddac91ba",
".git/objects/2a/09e08a7dcadbd582c500b942c5140630a292bc": "ab1a24d99f1dd9c59873a5947c72f842",
".git/objects/2c/30a6187e25799ff11935f7610d8ddec0b07d1a": "51028f61d2fd7752bdcf097749df98c9",
".git/objects/2d/461dc619b05054e4f3c01f3a3a26a17d4c97d2": "85f519a34ce654da0dd9e1c94c40e603",
".git/objects/2e/4a207606f930ba4277da459db5b122081c0625": "2c9a8777a7e40086ead38527bc38ba00",
".git/objects/2f/17db0adcf7dd4d4212c406ca8229cafcdcf315": "11038538325a0e01d193f96e26d4e069",
".git/objects/30/02c9eda55f52ff2dd452a03998ab36c87b8a67": "5046d185cd54bd949e2699537ff0909b",
".git/objects/33/2bf7363e198e81790ce5b87195e5ecb033afd5": "803af63c03d73e8bf2941e11204bbc25",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/c2a2371ceb7bff917a68385fd51f7c242a7039": "10905b29606b47465e740d608e0bd4ea",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3c/fc2f3273121b6920275ad25052be2b8b562269": "bab22b5f62a8dd0b289f4486f47980ce",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/ea77976451a9a1a8c06e96a72ea5c298a756b0": "7ccacafa0370528dd2620f19a7fcff47",
".git/objects/3e/ef9e62502e5caf6613ed8dc5de54981c523b52": "92bc876fcc3e6239d908387a5a98d2b9",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/42/1232d4c54cbb123d8d2faaa797de277a615fcb": "4b422c9aa9525612ec347592f3083af5",
".git/objects/43/741115a96061689e04090dd22b2ecec2c6cc8c": "c4153b476df45370f0370c74b7a80a02",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/5f99d2679a2bfee9298af14bc6c4d33deae54d": "593d5beb7142e069f6da24b3579b121b",
".git/objects/46/2fabf5dd22270053fd6c1cfe45cb47028f6587": "87ef9ec8a107ad00b36a7f8622e54122",
".git/objects/46/45af67cc10387c7c86b4105162f29a707e70dd": "b117ec3316461bdfb5fdc80fe51f105f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/ede19c16902cbf7f3434a024e90d833a0908c1": "a99a2752620628a55c7d21ab468de8b3",
".git/objects/49/0939f9513f5224155c082929fe3fb2f7d35c45": "408e432647bf58d721171b82d019bb49",
".git/objects/4a/9d9feb4cc13c208dc98fd1eb0aaf6fc4cfe343": "c96fa98da6d6e067357bd48f91e33511",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/88a8eafbdd1faaef59474029ddef305c30e92c": "a2fe7051ffdcb783754ff6563fa9a772",
".git/objects/53/0955fc922ae595b71cd1e684e3d9a4f24be54f": "5adbd5e7a010c68787a2f8406265801c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/9f78aa4efc19651dd8fa4f5a3e1769d87d603d": "0ee30d7e137754cb44da075d28dda9f5",
".git/objects/54/1be0d139875cbe5f18e1cbf47c59d4cf03bcce": "0b75ccb25bce43c97bd0966d07fbf3fb",
".git/objects/56/e5bf71f5d8647185cc258294e76a97de9f8096": "f67028bb04bb8b8ce376a4ccd7b9e56c",
".git/objects/57/08adb1839407e7b49f7b1fceb92e87114e526f": "c26783035c201826d60d4ea299097a02",
".git/objects/57/a5269574cafdf367e12057604a03fd0263bac2": "7ba0f879f83c88e78c5d084478589ef5",
".git/objects/58/4d8b1d1b1e71286425ef97c795fe263c22c648": "16ecd292973a210c7fc71677e3c2349d",
".git/objects/5a/b3d48c2e4821b898014b2bfd9f07b42ab67078": "4a7afe444916c65281c31ca18a0c7950",
".git/objects/5c/141711822b4206d4251ef2c64a64da22518b1b": "2d068379ab2c4983dc46ce94be33b17d",
".git/objects/5d/8293440fa501b3b108271c32d4e843cf582077": "38deccada9f9fb946efcf683667642e7",
".git/objects/62/a1397b2183a9246fa72e127a92103e9af188c1": "a65afbcf8e26b19995e3c3ace7b44091",
".git/objects/64/8171eb1869a55f83fac0a95f30ebaa4a0f5169": "d2db752a1f370c3260bde8f31690f38d",
".git/objects/64/89edcdf0f828438eef4e52b051e5259c7f596e": "858ea05453f4fdf41d81299761f1b80a",
".git/objects/65/242a7c93dd18bb599a9694a8d39ec416162560": "feef8d85ee903f5b751da49c873edb54",
".git/objects/66/dd47bdcca51b6976d92d4ba34969c7a30975cf": "7296f969203d9151c382768e4debc17f",
".git/objects/67/eda8e0448f769acd11831afdd7605f4c6a6da2": "e248fff9c08f97d6349b4b71c2daaeea",
".git/objects/68/1c9c54ee2bd93b62cebbe3c891c6a1c66978d0": "0c51e17c7539e64805d09ee9075e820f",
".git/objects/68/668edee5a7a720aa7fb53fef30b348b17db5d3": "a5d5f6fe555020bdaeea1b1e14bf654e",
".git/objects/68/c36761615a7f24c6926c21d1fbad09e4476b99": "e2f567889441973d998ef846b8f1fa97",
".git/objects/6b/33697dc38686654521d6e28d2a6ef810b2d2ce": "de7cf145bda01ed7cf0aabc7844741df",
".git/objects/6b/b2fd5440b151092fdd65a628b164dac56a118a": "2a1cd403ecac93937ddae923a4f0f677",
".git/objects/6c/55b36748d1c810a4e9718a3aa7871ed47b8911": "85b35c6384fe2c42a536334e7ba3c46a",
".git/objects/6c/fa9d09b8a0f64981607bd444a500c4deca9e6a": "e42bf78de86a96ddbef153967c7dcdc1",
".git/objects/6e/0fafb84a5b5acb706d2d6501d1542fa72c2219": "146bee9b643525f5a953da092f854511",
".git/objects/71/79ba51cedf8c39faf0a959c624b0c0066a8028": "7c18c9612ef4457239a19578e13c00bf",
".git/objects/71/f9177a90575ca4fc08d7dffdee721853ed6d50": "687bf34b172a94bcce2850519f2b9902",
".git/objects/72/3920891ff9042929264cce749eacb2f92b48e5": "903ab703d5d235a008050965c1635deb",
".git/objects/72/b8614e39a61290bc2efe1a5b34f5f37d16a461": "48137b79603b47d39553030a42d3ddfb",
".git/objects/76/97392e29cb47a2ac5979228ad621317a690ab8": "987f387590983031f8718aedaa08f503",
".git/objects/78/abd5560ae03acfbb128cf1b0bd22ad3ed5a7ab": "7fae6326c0059bb7d157ba7be9475f6e",
".git/objects/79/6a150e0b9d01371a976b7702936bf96f84b755": "4baf756156e3be156bb8d7109e24448a",
".git/objects/7c/06ec2f7f7de6aae443ce64d8a39316bfa18742": "5d2b79b8f3cd9cc38c1d919e5a5f12d4",
".git/objects/7e/22e9dd2118b9d63c86a2ab25c66dbb7dd1f42c": "85dcdcbff42b5d7d40269ad454588ee2",
".git/objects/80/afef50d529ffbc2408f5bd4da0f6be98a9809a": "a932309f00d9b1d9ffd5d0076e317013",
".git/objects/81/0fea6bf2f9d2d2eb8a5d171af6e0a49668c727": "74d1658a7bfc086c3e0e458127b673f2",
".git/objects/81/af2993f85e3c815439de7948c7e8003f68f2cb": "fe26c09dd99000704e3bb0bf33377745",
".git/objects/84/f1dd641709456159d07acc2bc1f61e5bdc4c42": "c009a9cc42de4bae426c767f6e8b78b4",
".git/objects/86/ba186f83349477d8c368649e549612d5e0200e": "220743a7a13706f6dcc086792c48b3e1",
".git/objects/8a/bbef86ae5b32bca5b56beeb7100849b036ee66": "61da62cd5d2aa3b77592d7883cda99bb",
".git/objects/8b/3645c7fa33eaeb562a6eb9965d5be705bbd521": "aa07e0d7d02cf908df6f15525d3deae8",
".git/objects/8d/120488e0f1524ed77ec58f4fdaee57bad7e103": "f0bf6a2f07a07e3fb3e12f87aca9628e",
".git/objects/93/9cbc57b91e4fc88fe71acbf392411ea85f3ad3": "24c9a9acc156a5ab4c72f73172710b6d",
".git/objects/95/334de9eca4af0ae2cb29d3ab216b52ae9f6647": "ce4c0b04f7cf5159365ab7e9f60332cc",
".git/objects/95/5f072ec900eabbc1bbca6c67850f7cba7d6eeb": "a2a8f692840cf6259aa884e619fff569",
".git/objects/99/b90910f2d8fa1ddea5143c0faa64632ccd8c30": "932d24cf50d8debb06b01adb3dca2fe6",
".git/objects/9a/660922fb27a27d0c3d82c7dea3c3f1c01fc652": "f6f307c69cde605592b84bb886138d78",
".git/objects/9a/a2d4d71bdefa7ffa7d9c6ead586cdf6130e0fd": "ebaae77b6d0b1e128a7eeddbd2ee653b",
".git/objects/9b/294228e2b18b12e71a71371d1f2779647b599a": "8aa51d73d26f9c561e03aa1b49eeb650",
".git/objects/a1/d70c4e962434c06b7505bd367ce0cdb722840c": "29ba61e75a056e5798b9814c25f4a9ba",
".git/objects/a2/b38045506c633fe000967154ef2b46caebe0f8": "ae5a512d748b9f5895390bb0bc4d8051",
".git/objects/a4/614bff3e0b7102e95ab725a92ba05571fe2ffc": "19c7ad7045083357d1884219b7360d1e",
".git/objects/a5/2d538bd1c82e0388533185033a6aad1d86b5b3": "d107e71df8a4c918806230dcfdf08f5c",
".git/objects/a6/9cc2cefc0566017e12095f600e055b12ca5378": "a458ad095bf905c4803d9bdeede16b39",
".git/objects/a8/67118deeb38ad6cc51ec412644a5eb828d62ed": "c1c42bb1814fc433b24e688f732d6488",
".git/objects/aa/37990c306435776d14ae6a831ce05d5df2ac56": "928ac17473fc1c3803b545e974d30867",
".git/objects/ab/93e6efb20ab2c605f5e2c08a2f3d42d3d8a97b": "f4392b209ba52d2f68d1316ada7edb62",
".git/objects/ab/df7b74fb311c7661e7ee9314fb1bc8b055c22e": "a4b52b6f550f80b380aeb03cdfcabc24",
".git/objects/ac/33bd597cccd3af2df3f6d0130b33289662000d": "c2ba773a29d01682f7c1247d25ea212a",
".git/objects/af/3f3d6c18e9e9f1a5cff3f2bcad4d7bdff212c5": "c078efcad79e2518dc929a595d0b682a",
".git/objects/b1/70b17fe62c530b57bcff8e69f2897c6feaf5cc": "7818315b2ba51d83198e972128ffd88b",
".git/objects/b2/fc0fbdfe33ee7e3ce020932dd47a5151fe6bd8": "0090a6a04bcc167e961f3f44a8010aa8",
".git/objects/b9/4371518ff1f79d07488f4764b730cd608fe6b9": "eee43106bf521cc4d5a34906856ca1f6",
".git/objects/b9/55b52d7801667f53bd276b08f505da6c76341a": "4dabc14733d4c7a99f25f7642a67c60a",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b21cb03c7982889217485abd813c778e548e9f": "37131675c7bf2bc36eb901451048f9cd",
".git/objects/ba/dde22eabffcdc9d54ede1adacaa7631c27b73b": "46e89089452b61a6e6afb7a54c26c3b4",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/5ec928fe1b425779ee9ed2cb861d0c7b39a279": "fe8b46abd2730f95161da3058a262aad",
".git/objects/be/7b4f32015c0cb6a4ff2a95aeb5f159faee894c": "c2afa942990caceb7c9ffd5e15a32f0f",
".git/objects/be/a88e1bb6680acedde5301d5f2d414f030a2bcc": "c63f99a3d1982c73c6995bc2dc1491d2",
".git/objects/bf/6141977bb27380f1a20f8238967728b3f63841": "d7a4568fe1415d44004e03daa17f2bb6",
".git/objects/c2/b2c20659a96fb11d5ee2b8c7c17f485f8d9afb": "45737282bb08065058751cb4a114efd5",
".git/objects/c2/c896c07b55313b84d7c7fd44ae21b0f69288a9": "6849a941a374d00d72b257091c8012fb",
".git/objects/c4/be64c60f70d0a68de1982afc8900152775cfac": "dffaec393af02b6d367bf12d874c6d19",
".git/objects/c6/3e647f23656a17add1c3f875db5ce8a6470d70": "d13060d8085696deeb0662bcf2df248f",
".git/objects/c7/0cca75c9344c1652b59f184fe8d14286603b04": "3ce0412191be89cb707e329c41a15099",
".git/objects/c8/1d3d87b64541e561d821bc0452ffd0a4b12a7b": "d11dab2db6bd7307759fe7658ee7f1ab",
".git/objects/c8/8f2be2d763c17bbcf00749f1cb4404d1eb391b": "8b44cd5a08a2db0bcf708a6fa95e9b30",
".git/objects/c8/a54b8d9dfe0d5b33d294110c7b6e43acc1b8cf": "187cb0b602b009013a2a0a5fcd58fbca",
".git/objects/ca/793d28e31ea1edfa406ef21c30b0e793a87163": "c285f0f2e86b7db6d196ab098332c92e",
".git/objects/cb/65746a6167a245195955711e01e140afed5cef": "076d702fde1f8dd5fa4d46be75982474",
".git/objects/cc/cf592c5241a373323964f26db3008d54527b40": "d58c56635ffa6882ac203e739af6a43a",
".git/objects/ce/e5889cb2327ffb915c1647a89e7b012288a710": "700a74b3dc8ee6d6620a734c2f945492",
".git/objects/d3/2275ed00a196dc7dc3896f5a2772dfa4f0dcac": "4ee76afa21c5430d6bd692d836ec21b0",
".git/objects/d3/358bc4ce4b8044bdc05c8a29a786e8bc46fdac": "92fc068b8a839ec065f52cc9cab20420",
".git/objects/d5/3db3d5ea5b375fb1a9ee6fc406d0af34c00131": "f8499e0d799eabd28322a67bc46629c7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/c0464bd88118b63964cb5d2f1afdcee820d881": "af0b500303b87d980698406e271544e1",
".git/objects/d9/4d55ec733a7ee232988a931dbcebd5e5f02fdc": "5e7b4d8646dbbabd69169ccea3684b7f",
".git/objects/da/6893c41c674347013f1364f3f4edc28446f2e7": "55c8e26d1279830bab43b534a70da73a",
".git/objects/da/f9d6ed010d5cdce302b4c4030c29faf6afb78c": "749505431190cff2c1d9d681a7a152bc",
".git/objects/db/a666ee016e4de18b397996b970bcc7f784e0cd": "bf8e7acb750d037096e90d83843a94da",
".git/objects/dc/23ff797e8af9aff65bd4c29d07eff1c0c26a69": "e2888f6e1561c5a589c986abb5a31e06",
".git/objects/dc/8e4682324e95bfcae775c52ac9062a652348f4": "95e6b484fde5b273ec0b759b945fcfc4",
".git/objects/de/ed7c256dff3a12fd48851fdd3c9856799afd76": "4ed084f8436143ab6774cd64f4352435",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/dc5578b209ed29b30d7e21a181c22d5a45b7ed": "72e57f905c6bb529e2656e310b81340e",
".git/objects/e0/5a6be69e99ca1083cd149d6f6b3519adfc0a28": "51f15285d752aa7a58ba41da8785fac8",
".git/objects/e0/7548ca4e0a5f3f1b060faaf8e4c144010ca889": "1a7db3dcdaf6322c2c304b2f7212fabf",
".git/objects/e4/f0cc67905c9d914adba2aa554afc866d66cda6": "eb7c4b5ec8c2eb05a869023a1dd54a85",
".git/objects/e6/a964bb3ebea5cc999d0ae0d2e61bb4f36db891": "9ab48eeb348693c22c31919367dd54ce",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/86d1c05aecd99a096159b9740ff1d996d704a8": "41a16f371e6708f27896a7b4da0fff47",
".git/objects/e8/5ff71ec37b2f78203159b16c6ad7dcc4f8d25c": "53877e30cdeca375db43c93b207d5ead",
".git/objects/e8/a3419cad9003d1bcc92aaf005563ae37b26e33": "f94ce9504d656fa59c2e5c4b6701a8d4",
".git/objects/ec/8982a2e80f2209c63106d003522a60e15b33cd": "3e1e0f5f9dff3e5bc4400514ec33821f",
".git/objects/ed/f16e4a028e49799254f5a89f0bfec55bdb0d31": "d0115fe22160d271541a043ffaaad4fb",
".git/objects/ef/8746a71573e39dd262c4dfa55fbe60ad49ee8e": "06815eb24065240a5571e9b6c69c9212",
".git/objects/f3/244fdad161c744225579b90eb3aa55cf46c024": "0cbffb14e155dc7e5db134f84436e1f9",
".git/objects/f4/7514337a529e704bcad38763a549cd96817939": "5d1774ad10b1413db4d4a2c77c187b13",
".git/objects/f5/6327ad570200044483d9f8f4ce5a3d6f5288d4": "a5092124a6680e177ab6f4d11dc5a71d",
".git/objects/f5/8875a55e4cf764d1f04c4d188147937a794eb6": "bfd62d77a59607c24adcc366daf5562f",
".git/objects/f5/c59e49ccaf8668f4a19d0903308f23f7606ad3": "7c4b73aa46ac15badb47222e6334e4cd",
".git/objects/f5/cc95e2d2653ad4ca621562df628d3b60e9f4ff": "ba484a429281aba5e7ab861cacd5d7bd",
".git/objects/f6/208b219e7a6824806716f7fc1233e4364b92a4": "387b05550ff9c59b5f4e627cceacd534",
".git/objects/f8/fc3f057ae4686b37c3806e1e529b5351913e92": "5ac3915859900ba09a9fb412f7b66356",
".git/objects/fc/92adfacae9928ca7ba642e321132f83e3e8b8a": "51bb026bc3c3b2fcc03f556a97489b55",
".git/objects/ff/5d8bc575bb9dca85ba5ddf678fb4c0d7247e54": "aee30b45d02aeecbb804b214074000a4",
".git/refs/heads/main": "c9397795c17831d7fdab18df99bf288b",
".git/refs/remotes/origin/main": "c9397795c17831d7fdab18df99bf288b",
"assets/AssetManifest.bin": "d548444075915e0965e675598f45a182",
"assets/AssetManifest.bin.json": "06c43022fcb802e98a3f6ef1706cf40c",
"assets/AssetManifest.json": "eadc481444f24942b53e0206621f93f7",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/icons/angle-left.svg": "a881ffe2cdd1b443b4fef82f8e4cf323",
"assets/assets/icons/apps.svg": "99639af74d900f557a215096b239c542",
"assets/assets/icons/arrow.png": "37ef5d76a506a01ba9730d5fb9a91d93",
"assets/assets/icons/arrow.svg": "76c73bc01d0860afdb403165bd7f673a",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/box-minimalistic-svgrepo-com.svg": "047799a90144024c7b245583888ec958",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/ChromeSetup.exe": "b2978a662e72fa3f6fae4492d3afd2c6",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/deb-file.png": "baa26a633d818940bd480230396f395b",
"assets/assets/icons/deb.svg": "aa50bfe12a30b19b3f092749c74e6c88",
"assets/assets/icons/deb1.svg": "bddd8d260a0571934d5f5d420536754e",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/download.svg": "12db97e5241d628898f8a57fbbd7d16c",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Game%2520Icon.svg": "116bd2707a410cf3a2e8559962e1c2a3",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/home-svgrepo-com.svg": "4b28899f03c099254f81e023d2d6cefc",
"assets/assets/icons/home.svg": "c25f832d5fa52a377e2b61e73ebe3d24",
"assets/assets/icons/icons8-file-50.png": "5dbf41c31ea5db600fe7d8ce44a45347",
"assets/assets/icons/ipa.png": "2f0847cea7b860f12f57f3d7d72a714d",
"assets/assets/icons/ipa.svg": "edc06f0a577160a562f057abf8cf378f",
"assets/assets/icons/ipa1.svg": "47ca9e8ba4c27870c90da0a8a19adb9b",
"assets/assets/icons/jit.svg": "c0ccdda40a945f076ca6f3410ecb035e",
"assets/assets/icons/jit1.svg": "13d509476c741d97198e86df4c8f7262",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/play.svg": "b5f1188a0d9e1d58df5dc68ae8117887",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/search%2520(1).svg": "e2ec80026e8a35dcabdd82b836d79241",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/search-sort.svg": "5f26790db9a27d7877be38a660890497",
"assets/assets/icons/search-svgrepo-com.svg": "d3cc3d99f24f33171f8fc71a7b72b95e",
"assets/assets/icons/search.svg": "fd8ca78e886ea36183af451317e6f8e8",
"assets/assets/icons/settings%2520(1).svg": "2f93d69a741e066d8bd2c59d578fb8ca",
"assets/assets/icons/settings-sliders.svg": "91a08b23deabab5aa96c52b5df642081",
"assets/assets/icons/settings-svgrepo-com.svg": "174c5e65353a1da2bfb2f8d9f9766271",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/square-bottom-up-svgrepo-com.svg": "4b29f153beb3ff39c61a299adce38486",
"assets/assets/icons/ssearch-svgrepo-com.svg": "c02aec70243739c21e2d293877a83aa2",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/tuning-square-2-svgrepo-com.svg": "50db75a62728dfc4f1f2976bca0fc17d",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/images/apple-pay.png": "8ed30196e39ee689aa2cc5b604da80ee",
"assets/assets/images/fedex-express.png": "5c65ce272dc58c3dd0b416f0549f23e4",
"assets/assets/images/glap.png": "562f67ce5b89f0fd52b82756866f5c6f",
"assets/assets/images/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/images/Image%2520Banner%25202.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/images/Image%2520Banner%25203.png": "ac22df8189dc403ff2e113489fb114b4",
"assets/assets/images/Image%2520Popular%2520Product%25201.png": "af5c7d2b62467e5340990c2c18d04841",
"assets/assets/images/Image%2520Popular%2520Product%25202.png": "0daef779816bf4febf8967c5b8c9ddb3",
"assets/assets/images/Image%2520Popular%2520Product%25203.png": "fcbdff37daf1bf2aca91b6bc9323c4ca",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/product%25201%2520image.png": "d22ed624beffb93913bb3436bd8f9e6a",
"assets/assets/images/Profile%2520Image.png": "07a16c1fa377ead829efef7e95ffa5c4",
"assets/assets/images/ps4_console_blue_1.png": "0085bd0d4680ea7e99d92fbd1a2d67df",
"assets/assets/images/ps4_console_blue_2.png": "f321803db42a1852afeebcc740edae90",
"assets/assets/images/ps4_console_blue_3.png": "69c388ccfc8f00f0815de3696f0dae25",
"assets/assets/images/ps4_console_blue_4.png": "b9d0ed66e7040ef25f41501c143734b5",
"assets/assets/images/ps4_console_white_1.png": "070751496c7e7e8a3beee49c52fc4eba",
"assets/assets/images/ps4_console_white_2.png": "fdc127c9033115e9ff73d9abcec601c1",
"assets/assets/images/ps4_console_white_3.png": "08c0901faebb16d9547fea1d651a795d",
"assets/assets/images/ps4_console_white_4.png": "c06cfaab26ed218bdf3eadab54a97067",
"assets/assets/images/shoes2.png": "e746c8992abd29da966cf91f8da87290",
"assets/assets/images/splash_1.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/images/splash_2.png": "3580b1c0bb9f244b51d8042b8e762bf5",
"assets/assets/images/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/tshirt.png": "eaa8d7a86210783a28569afcd67632c6",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/images/wireless%2520headset.png": "dd4c3f943adb93a516441e8068058b2c",
"assets/FontManifest.json": "2b150d200b71c4a389a23996af4359ad",
"assets/fonts/MaterialIcons-Regular.otf": "da7e2862a237ecde1c9f40fdb97839cc",
"assets/NOTICES": "b035f698f18cc33eeed0171ef0ed6ff2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"index.html": "b5f54efde5ba6abb3f59dfe00a60eb8c",
"/": "b5f54efde5ba6abb3f59dfe00a60eb8c",
"main.dart.js": "8a78b1ff3ff32a37636ed4a2f174e2e9",
"version.json": "c4e35e29036ee2e58d24753160e6c082"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
