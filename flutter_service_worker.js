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
".git/index": "65ea65c773b8ffe22d6c9cc00d2f4840",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8685038a77d75f6f7f94931ccfe5dbf1",
".git/logs/refs/heads/main": "640f8289c97fc8fb1609a01e80534765",
".git/logs/refs/remotes/origin/main": "90778145e8a8248ef984b7412f48c876",
".git/objects/00/04ef60888bb388f943a5c3e3776ba5e5f5fe3b": "456b4a489d8f6cd8a3b7b9a7234524c2",
".git/objects/00/b662c5d69f1a081efb00488c21803e2c10c302": "b2addf0a37e39e4ee999813cb05f896a",
".git/objects/01/313e9053252de343d334dfa3a0848e2a005751": "7ff063a83c9160ef16111dc5a6ad8ea3",
".git/objects/02/fad2c74cb896b9fda04717e1d20354c108db7a": "0d42e43933de301ff04ed35aeaa5c77c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/d03d4c21970d4dad9ba8345089e3edc407cc2d": "0c8755f8e3c07c067b7e423f89dd0954",
".git/objects/08/5c6a71696fa4cb16c4a752f52c68e0df7facb5": "fac51c248827c7f7e485ea1f39cc5067",
".git/objects/08/75a343b15d59a3dd2936566f2acf8f427a546f": "507c5b5f169f264db479619f8b4711ee",
".git/objects/08/dcd61acee1d5f3f6d603972e362e81e52bc5d1": "96cc2864217119a15f800152efe6d4c5",
".git/objects/09/30f20caf0a905325548a221462a063ec3ecc16": "52b0b0aad30e52ccd13397480fff9b68",
".git/objects/09/6adf647ca181bdb1938a2e1ffce561f60b5b07": "fd4a9d0b1b6ea9ebb379e89347617dc7",
".git/objects/09/d25d0180ee44c0a9d290b18d40427a4a534932": "5a427fa3421b566bbdbb9e81bda389ee",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/d08bbb37da3049c64beb06ae04042e1f5b3355": "93313c96ef4743697cd56c20aca41382",
".git/objects/0b/a6b6f62a8ed75d55339158c64a4cbeffdb0d25": "4ed78af9146e88c5cfca62fd20164c48",
".git/objects/0c/9648b3390db4eee46da3323506615493198d55": "7eafae95dc72dbc46d82699eb2821675",
".git/objects/0c/aff80cda9b45e2185d2db8ab7f9fa9fe1d3f11": "f9dbc7e14c38f7e0263c58c1067257a9",
".git/objects/0c/c8d09793d5595258043212a9979685cb535133": "50919a86b1c208885331b8af7c5e99d7",
".git/objects/0d/9a3b4e0f26d7dd420b2494b77e8ccee257a29e": "b478767bb4c578583945bffe489e4c2c",
".git/objects/0e/525ba347270a4f1cf77cf635361484ef18b959": "ad5ddb03d147a9a327c39f16026891fc",
".git/objects/0e/e5b529d85ae2db206810a215e482383fa80c22": "2b6f77f7338ef2218ad8c62220ef7723",
".git/objects/0f/52de6d7b5ba8637370136d1674dd50aa502ce2": "0c3788a85e9884ae27b18c0faa3f308a",
".git/objects/0f/943702de352ec1b4f4c40b43d1cfc76786251e": "27409348561391f2e8dfad6863ac3d41",
".git/objects/0f/fcfba2e8bfeea6944bfbba39447991daeffc97": "be86291736b4013233e97f6fdfd08fb3",
".git/objects/12/56c134fa6fbcb2e4ba6f96e9cea25b05b152cd": "69ab53713c7f615a90ad27e3b3eb9ef8",
".git/objects/13/6fdd3cdb0ad924330aefe36464d34ed6656b1a": "eb8fcbfc94737528a1b88b15774b18fb",
".git/objects/14/2f7fae3cfbe68072365ee3e2346a7cc63df556": "4354e5180ca02124dfad6701bb92d2ff",
".git/objects/14/b6c49923dccfbe5d816d7c62d13ac5f1dbdb00": "79a32a1895cda70bc935946c74b4516f",
".git/objects/14/e6d56cd08d01a588d420c875f1a228934c2d55": "7aaea6286afbc818587bafb6a5e41c74",
".git/objects/16/1f677f3231da8297b414fb2fa1a277750e51ca": "742aef4e2fa78c620143d6f2ae7bca0b",
".git/objects/17/316e78ee757bce9bd5a3ba4e56988febb1538c": "a8e9a3874bc39c79f1ae0ec20fd6b730",
".git/objects/19/7a472acc98b0f272e8c131e4d910750472fe2c": "2e36a0a5be47ffc0b0a104afcda60937",
".git/objects/1b/12ca6c7113d72b97c77cc4cb46e7e3ce178e5f": "9c95ea79874da5a1c10caff33b71a714",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/98eda66362a5c3c05626e7476e9fa0c614244b": "e728abbf16e179d5f7c21dc5d3af616d",
".git/objects/1d/ee15322ce30346c90de9e3f3efa7029b621139": "8c29b4e3f8709ef4c65378a49cda14c6",
".git/objects/1e/3dd295bf4b83d4aed3e3393a1e7c9f5499c38d": "60058649afb3ea2d2830a7bda550eaab",
".git/objects/1f/eee4410c9295303d3690643b4e07619b627a4e": "abf3c5efc0a49bf2a22b43902ed3e229",
".git/objects/1f/f76b453dddd4832e920c64299c1632498a6a10": "dd5f051a9668027fade3aaaf369028d0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/99b2ddd5a641c579f7a8ff4638701a494c6734": "c24071c9fdd920244f19af4620aef639",
".git/objects/23/52d5e10153aebd0ad50a6ac3332e54b0e27499": "35c03ac6821ac165150080f32875ce92",
".git/objects/24/53ce7ff69bc470e6d5b237d122537d6d4035f7": "d9610b77cef8ddc5416b61e49e90d8be",
".git/objects/24/aed8d60d461ec3348f9cb71398eff12ff76b09": "7a1db45b0545cab320477b8e83a58b9a",
".git/objects/24/c6c20debf0238af42ef0882eaf0141ee070586": "b551b908aba7f05f32b37913ef617e81",
".git/objects/25/4c34088fe9ce471eee5765e8a173a1fecff9ba": "bd871d27284799fdbe0f18825c465dba",
".git/objects/26/c728b2185b68cae1ca7c84f306ff217282acdd": "b969f396798dedeb0e7cb454b47b4f21",
".git/objects/26/cb8c6c67a8f6815d27e63c0e606077c26cb606": "2a322058760a759bd2ffa4de0a93e58e",
".git/objects/27/305850c2274cba8f49976aedbe75e3252ef3f4": "d62a52aefe623f88ec4314ede803c899",
".git/objects/27/7d90cebb41803f488abadcd5e4746f2d27127f": "2fab0147f87411ec09630038cb2096d0",
".git/objects/27/a99a322dcbfd4ee701dfac410eaadf8144389c": "618650c179c5eb3a330cb75c5a5070ac",
".git/objects/28/327374695dcc277f48199cd7feffe5bf5797a6": "54508d5fa8d0885cee17a94db0aa6433",
".git/objects/28/9d020d9e586811aa9cf214ca5234338f897859": "adcf52dbcdb4d7664abcf437ddac91ba",
".git/objects/2a/09e08a7dcadbd582c500b942c5140630a292bc": "ab1a24d99f1dd9c59873a5947c72f842",
".git/objects/2c/30a6187e25799ff11935f7610d8ddec0b07d1a": "51028f61d2fd7752bdcf097749df98c9",
".git/objects/2d/461dc619b05054e4f3c01f3a3a26a17d4c97d2": "85f519a34ce654da0dd9e1c94c40e603",
".git/objects/2e/4a207606f930ba4277da459db5b122081c0625": "2c9a8777a7e40086ead38527bc38ba00",
".git/objects/2f/17db0adcf7dd4d4212c406ca8229cafcdcf315": "11038538325a0e01d193f96e26d4e069",
".git/objects/2f/94af7ecb0912e1dac712dc271ffa7ea960b029": "c84c39ab4e3c8016636f66f306a35f0d",
".git/objects/30/02c9eda55f52ff2dd452a03998ab36c87b8a67": "5046d185cd54bd949e2699537ff0909b",
".git/objects/30/04a89cae1bcd7fb9fd0ba49c81b0ebe1994986": "0dcac1c6ab6e10c0d640d2f452e31eff",
".git/objects/33/2bf7363e198e81790ce5b87195e5ecb033afd5": "803af63c03d73e8bf2941e11204bbc25",
".git/objects/34/71f73e952d6e5432f8bfdd6490ba6ff8731ef2": "4c6cf502d38c246e7015f13c27305fac",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/04b485611c33bf0ed90bb3aae9f25448da5611": "52ba8c2c21bc948ae0a4a73ac9992d40",
".git/objects/38/c2a2371ceb7bff917a68385fd51f7c242a7039": "10905b29606b47465e740d608e0bd4ea",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/aee85eb937eee84aa6d073f49638d591916947": "ee61e5df921dad6ae4c9b0640500999b",
".git/objects/3c/da22cb81b93dd567ba0489fb3d374891930efe": "0953b92a3eb9af27af2477b55f6e53de",
".git/objects/3c/fc2f3273121b6920275ad25052be2b8b562269": "bab22b5f62a8dd0b289f4486f47980ce",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/ea77976451a9a1a8c06e96a72ea5c298a756b0": "7ccacafa0370528dd2620f19a7fcff47",
".git/objects/3e/ef9e62502e5caf6613ed8dc5de54981c523b52": "92bc876fcc3e6239d908387a5a98d2b9",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/7e2d24bca77c7051eef147d3c233ee5cab3d07": "1bdb98e3913c71e13841b65d9faa74cc",
".git/objects/40/50ac5168535a1bce932aa139ad2e3da82dad67": "d0095a806a412a18a5e14250a64c49fc",
".git/objects/41/05285fc7f2b96a5bbdc9588b42a5895f6d2b8c": "a86151bcbf1380844b54dc64a25c27dd",
".git/objects/42/1232d4c54cbb123d8d2faaa797de277a615fcb": "4b422c9aa9525612ec347592f3083af5",
".git/objects/43/741115a96061689e04090dd22b2ecec2c6cc8c": "c4153b476df45370f0370c74b7a80a02",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/f5b0799df675e015f7794b56ac91c06cd4e25f": "fc46c4090d316c3c67a8177b9ce1062f",
".git/objects/45/5f99d2679a2bfee9298af14bc6c4d33deae54d": "593d5beb7142e069f6da24b3579b121b",
".git/objects/46/2fabf5dd22270053fd6c1cfe45cb47028f6587": "87ef9ec8a107ad00b36a7f8622e54122",
".git/objects/46/45af67cc10387c7c86b4105162f29a707e70dd": "b117ec3316461bdfb5fdc80fe51f105f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/ede19c16902cbf7f3434a024e90d833a0908c1": "a99a2752620628a55c7d21ab468de8b3",
".git/objects/49/0939f9513f5224155c082929fe3fb2f7d35c45": "408e432647bf58d721171b82d019bb49",
".git/objects/4a/96f9fadb1bb12b57f4e646f169c3f6aed256a2": "dfc0a79f6eca91a3adfeef83a448adfe",
".git/objects/4a/9d9feb4cc13c208dc98fd1eb0aaf6fc4cfe343": "c96fa98da6d6e067357bd48f91e33511",
".git/objects/4a/b8cdc8f87dab5bcd7a39422d430665d2038830": "d8c0f044382227afa0a08dc22946a337",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/0a7ee0437a3eef291ffe61743e46f93a6ab57f": "cb7da16cf2b19285adf96442bd028511",
".git/objects/4e/5dcfe4fe794ee80633575b156aacb787c9db1a": "41e485527d49ddabfc82aa23bf766cb0",
".git/objects/50/88a8eafbdd1faaef59474029ddef305c30e92c": "a2fe7051ffdcb783754ff6563fa9a772",
".git/objects/50/93adc419b6544830cf1ef5cb579f1c7a85d5e5": "06ed7e46fac6c0c9a86306feaa2e8899",
".git/objects/53/0955fc922ae595b71cd1e684e3d9a4f24be54f": "5adbd5e7a010c68787a2f8406265801c",
".git/objects/53/1a4630250858d53df53f3ee2b80d6938cefca7": "bef3324ab892113b9cb46de74d909f49",
".git/objects/53/5046dc9d6d8b198eee62455bab6c884d77b588": "1d65e854c64db0a664575aaf1d33d6ec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/9f78aa4efc19651dd8fa4f5a3e1769d87d603d": "0ee30d7e137754cb44da075d28dda9f5",
".git/objects/54/1be0d139875cbe5f18e1cbf47c59d4cf03bcce": "0b75ccb25bce43c97bd0966d07fbf3fb",
".git/objects/56/e5bf71f5d8647185cc258294e76a97de9f8096": "f67028bb04bb8b8ce376a4ccd7b9e56c",
".git/objects/57/08adb1839407e7b49f7b1fceb92e87114e526f": "c26783035c201826d60d4ea299097a02",
".git/objects/57/a5269574cafdf367e12057604a03fd0263bac2": "7ba0f879f83c88e78c5d084478589ef5",
".git/objects/57/d454bf5df3e0b8e7b2e37ac8a84cfacf648972": "92e378b6c7bc28a21bd370f232a384d3",
".git/objects/57/f7de2d2261fba7f44b1d1ac6154f46cfb75dae": "0d866adf22c89d03a741ec7dffcac5fb",
".git/objects/58/4d8b1d1b1e71286425ef97c795fe263c22c648": "16ecd292973a210c7fc71677e3c2349d",
".git/objects/5a/60bd483e9f247572957d402f9f67846c8b5ace": "0e1ba9bf021b3710ed0a4deefb73fdba",
".git/objects/5a/b3d48c2e4821b898014b2bfd9f07b42ab67078": "4a7afe444916c65281c31ca18a0c7950",
".git/objects/5c/141711822b4206d4251ef2c64a64da22518b1b": "2d068379ab2c4983dc46ce94be33b17d",
".git/objects/5d/8293440fa501b3b108271c32d4e843cf582077": "38deccada9f9fb946efcf683667642e7",
".git/objects/5f/a15a1d23068cd8f74f90ad470b31d708327040": "cabe6dc408a6cf5741c7c210b2cb0495",
".git/objects/62/a1397b2183a9246fa72e127a92103e9af188c1": "a65afbcf8e26b19995e3c3ace7b44091",
".git/objects/64/8171eb1869a55f83fac0a95f30ebaa4a0f5169": "d2db752a1f370c3260bde8f31690f38d",
".git/objects/64/89edcdf0f828438eef4e52b051e5259c7f596e": "858ea05453f4fdf41d81299761f1b80a",
".git/objects/65/242a7c93dd18bb599a9694a8d39ec416162560": "feef8d85ee903f5b751da49c873edb54",
".git/objects/65/85116903c76385f42e68f2c87ce32368181a17": "48cafd67fdc4fec76d35b089e1a7eb73",
".git/objects/66/dd47bdcca51b6976d92d4ba34969c7a30975cf": "7296f969203d9151c382768e4debc17f",
".git/objects/67/d5c06d4a153c049e83722a37a738a5e7bf2664": "7f3b7f39bf4822d1a6e2ce1d1a0a6f89",
".git/objects/67/eda8e0448f769acd11831afdd7605f4c6a6da2": "e248fff9c08f97d6349b4b71c2daaeea",
".git/objects/68/1c9c54ee2bd93b62cebbe3c891c6a1c66978d0": "0c51e17c7539e64805d09ee9075e820f",
".git/objects/68/668edee5a7a720aa7fb53fef30b348b17db5d3": "a5d5f6fe555020bdaeea1b1e14bf654e",
".git/objects/68/c36761615a7f24c6926c21d1fbad09e4476b99": "e2f567889441973d998ef846b8f1fa97",
".git/objects/6a/37bc1ca23d740c13e93a30f9949a16a77f7b57": "2a9fdd9036b792f714817d83384b0eb9",
".git/objects/6a/87a2ad9a63cd699cdfad61ee99e5ebeca2249f": "aa2a3b21dad56a755573848556dbe04e",
".git/objects/6b/33697dc38686654521d6e28d2a6ef810b2d2ce": "de7cf145bda01ed7cf0aabc7844741df",
".git/objects/6b/705a04f0f137cdeddcfb251693dddbbd904518": "9e626ea77e255a0aac1ff2713db4a81c",
".git/objects/6b/b2fd5440b151092fdd65a628b164dac56a118a": "2a1cd403ecac93937ddae923a4f0f677",
".git/objects/6c/55b36748d1c810a4e9718a3aa7871ed47b8911": "85b35c6384fe2c42a536334e7ba3c46a",
".git/objects/6c/fa9d09b8a0f64981607bd444a500c4deca9e6a": "e42bf78de86a96ddbef153967c7dcdc1",
".git/objects/6e/0fafb84a5b5acb706d2d6501d1542fa72c2219": "146bee9b643525f5a953da092f854511",
".git/objects/6e/41b3a7bdf95a78724aa50713cd3a95ca762dea": "e136cd891baf7e725ec0870cdd6a30dc",
".git/objects/71/79ba51cedf8c39faf0a959c624b0c0066a8028": "7c18c9612ef4457239a19578e13c00bf",
".git/objects/71/f9177a90575ca4fc08d7dffdee721853ed6d50": "687bf34b172a94bcce2850519f2b9902",
".git/objects/72/3920891ff9042929264cce749eacb2f92b48e5": "903ab703d5d235a008050965c1635deb",
".git/objects/72/4ba36e540ee6439a4fde6a01cf0a15b82268c3": "b5b121548e001d06e1cc83c63e67ea6d",
".git/objects/72/b8614e39a61290bc2efe1a5b34f5f37d16a461": "48137b79603b47d39553030a42d3ddfb",
".git/objects/73/e329ef15dfebfee8a824236ea3e4f583f8f219": "c2b114d4a736243ce00cbb50cffaa0a7",
".git/objects/74/b5ab05bc43651f0667fd2de7528a20df296370": "bedb93611867d904037d1b40f7d66086",
".git/objects/76/6f60de0976a1f2b261c0fb9a992abde6a6117f": "1edf6cdbfc7472cf88e712213719b3e6",
".git/objects/76/86cd44e64205e8b2c34b471a4aba3d125f8e69": "201280f523354dc75dcd45b0c0257c0b",
".git/objects/76/97392e29cb47a2ac5979228ad621317a690ab8": "987f387590983031f8718aedaa08f503",
".git/objects/78/abd5560ae03acfbb128cf1b0bd22ad3ed5a7ab": "7fae6326c0059bb7d157ba7be9475f6e",
".git/objects/78/c0d169a7c262027d7246a2bc74e551de56d515": "407f3e6b3a5761c4063fbe2076acb46e",
".git/objects/79/6a150e0b9d01371a976b7702936bf96f84b755": "4baf756156e3be156bb8d7109e24448a",
".git/objects/79/6bbae1b7250d6cb33e0aeb269f769546490781": "d585ff557220207efc9860ab75b5e91a",
".git/objects/7c/06ec2f7f7de6aae443ce64d8a39316bfa18742": "5d2b79b8f3cd9cc38c1d919e5a5f12d4",
".git/objects/7d/697aa8da23565c3d19cdd9a543948289b78f62": "47fbb5e465493f9984b6ed65295a63c8",
".git/objects/7e/22e9dd2118b9d63c86a2ab25c66dbb7dd1f42c": "85dcdcbff42b5d7d40269ad454588ee2",
".git/objects/7f/aa23d3dff245408241f2254133db75ef34315b": "efbbfb0dbfa023296c14b14ab4be59df",
".git/objects/80/479eda7d8032f646e2d706f486a554944d3c2a": "254a81ca799e3281eba7f43f71ea35b0",
".git/objects/80/afef50d529ffbc2408f5bd4da0f6be98a9809a": "a932309f00d9b1d9ffd5d0076e317013",
".git/objects/81/0fea6bf2f9d2d2eb8a5d171af6e0a49668c727": "74d1658a7bfc086c3e0e458127b673f2",
".git/objects/81/3b1eaeb95956c72e7d31b8ff069cd8fa07fb3f": "0efefd5e54dc66ef9727617f786b0a4e",
".git/objects/81/af2993f85e3c815439de7948c7e8003f68f2cb": "fe26c09dd99000704e3bb0bf33377745",
".git/objects/82/93b558a92979aa61c06583f79ae96a4c2e64b7": "4aa86260d3b808568f5df20dfeaf8ffe",
".git/objects/84/f1dd641709456159d07acc2bc1f61e5bdc4c42": "c009a9cc42de4bae426c767f6e8b78b4",
".git/objects/85/ea56c131eb889243bdb0d65e72e60c3db2fbb8": "f7ed73faa4d94b822da8e956a751848f",
".git/objects/86/ba186f83349477d8c368649e549612d5e0200e": "220743a7a13706f6dcc086792c48b3e1",
".git/objects/8a/bbef86ae5b32bca5b56beeb7100849b036ee66": "61da62cd5d2aa3b77592d7883cda99bb",
".git/objects/8b/3645c7fa33eaeb562a6eb9965d5be705bbd521": "aa07e0d7d02cf908df6f15525d3deae8",
".git/objects/8c/def36424288b2cc052254a7fdcef1d55bf2e44": "5dcbfd4bacff3cc287887f2b4164646d",
".git/objects/8d/120488e0f1524ed77ec58f4fdaee57bad7e103": "f0bf6a2f07a07e3fb3e12f87aca9628e",
".git/objects/93/5fa523f0a8d6682573c0885751447600a4e805": "503749626eb345ef101b2827b551c245",
".git/objects/93/9cbc57b91e4fc88fe71acbf392411ea85f3ad3": "24c9a9acc156a5ab4c72f73172710b6d",
".git/objects/95/334de9eca4af0ae2cb29d3ab216b52ae9f6647": "ce4c0b04f7cf5159365ab7e9f60332cc",
".git/objects/95/5f072ec900eabbc1bbca6c67850f7cba7d6eeb": "a2a8f692840cf6259aa884e619fff569",
".git/objects/96/29c7a30c06d9762d769284bb791b4492ef7c8b": "e3b964077f5ad698fc84f0f63a81e8d0",
".git/objects/96/d9ecb1a100f1d0b65c2d835e1294af0f785379": "7cfca9a5492a7e28634c930e3fc0231c",
".git/objects/97/d86f3869783421edb25b3b61b7095ba8de9c48": "2b4854d91c75b81b6e6f9b061eed262a",
".git/objects/98/d71f1eb45dfa9de2e17dd5fb70fa0b85a8c2b6": "8854a5d0a7d6a756f57f326d7d709dec",
".git/objects/99/6acae98f0251cc2ff7fab7328471bb5da52ce2": "217ba6058f34fe047f1e77fb7b035cb9",
".git/objects/99/b90910f2d8fa1ddea5143c0faa64632ccd8c30": "932d24cf50d8debb06b01adb3dca2fe6",
".git/objects/9a/660922fb27a27d0c3d82c7dea3c3f1c01fc652": "f6f307c69cde605592b84bb886138d78",
".git/objects/9a/a2d4d71bdefa7ffa7d9c6ead586cdf6130e0fd": "ebaae77b6d0b1e128a7eeddbd2ee653b",
".git/objects/9b/294228e2b18b12e71a71371d1f2779647b599a": "8aa51d73d26f9c561e03aa1b49eeb650",
".git/objects/9c/8249a13631cefbedd3b128400433db925b225b": "784f993822fb851c64cb7be95e951a32",
".git/objects/a0/1eed1f55ca70c348d6b6f6bc85e3afd65541fe": "6057846c64c84d8e2d84f81ae3af70e9",
".git/objects/a1/d70c4e962434c06b7505bd367ce0cdb722840c": "29ba61e75a056e5798b9814c25f4a9ba",
".git/objects/a2/b38045506c633fe000967154ef2b46caebe0f8": "ae5a512d748b9f5895390bb0bc4d8051",
".git/objects/a3/224788ee546959e5f6c697181b0075a854c411": "a4963f2c4b9f79ad88e3199f623c643c",
".git/objects/a4/614bff3e0b7102e95ab725a92ba05571fe2ffc": "19c7ad7045083357d1884219b7360d1e",
".git/objects/a4/d23dff84eeab11ccb7e99f1d40134d58578c23": "3ebb0273b64d94464b45c44e61a88354",
".git/objects/a4/fbb75d7f546bc169720f71c6d5e8d3622b7632": "d44360a5ecd4799e7d1413044c2c6ab5",
".git/objects/a5/2d538bd1c82e0388533185033a6aad1d86b5b3": "d107e71df8a4c918806230dcfdf08f5c",
".git/objects/a5/c400deacb8d1e97751226e9d27abaf450bf821": "a5f60660f9ee603395e6bc0bc49a1be8",
".git/objects/a6/9cc2cefc0566017e12095f600e055b12ca5378": "a458ad095bf905c4803d9bdeede16b39",
".git/objects/a7/429ad81d732a2a1ce8b078ec0cb2af08405b8f": "e1391a9771a975b11508179acfbd14ed",
".git/objects/a8/67118deeb38ad6cc51ec412644a5eb828d62ed": "c1c42bb1814fc433b24e688f732d6488",
".git/objects/aa/37990c306435776d14ae6a831ce05d5df2ac56": "928ac17473fc1c3803b545e974d30867",
".git/objects/ab/93e6efb20ab2c605f5e2c08a2f3d42d3d8a97b": "f4392b209ba52d2f68d1316ada7edb62",
".git/objects/ab/df7b74fb311c7661e7ee9314fb1bc8b055c22e": "a4b52b6f550f80b380aeb03cdfcabc24",
".git/objects/ac/33bd597cccd3af2df3f6d0130b33289662000d": "c2ba773a29d01682f7c1247d25ea212a",
".git/objects/ad/8048afba38b3e20bc1c625abf31516b8ca51a9": "ea8a70c158a8f6312a392551fe43c74e",
".git/objects/ae/63a5df1358166cbe705f339bc0d28dd4aa2e73": "ea8169623c157d6c173481f867ab1869",
".git/objects/af/3f3d6c18e9e9f1a5cff3f2bcad4d7bdff212c5": "c078efcad79e2518dc929a595d0b682a",
".git/objects/af/7bc1fcfd5ce574133bf6283941e935c0286cb3": "869ab6699076bac0a121d0abd2461a32",
".git/objects/b0/50d2fb352ba8f227597310605186ecc8f37064": "22a9fde4d468b8bf4405e53d0a513f5a",
".git/objects/b1/70b17fe62c530b57bcff8e69f2897c6feaf5cc": "7818315b2ba51d83198e972128ffd88b",
".git/objects/b2/e331550c07e50bc81664de983efb75c3c3441b": "2430f6be73876a78b7a788562922c987",
".git/objects/b2/fc0fbdfe33ee7e3ce020932dd47a5151fe6bd8": "0090a6a04bcc167e961f3f44a8010aa8",
".git/objects/b4/8f9c6e713fedb78ad8f74b2c180ca2bc5724bf": "187e80ed2da6c96474cf1e77136074bd",
".git/objects/b8/d794939fc8c69bd142f02371c59588d9eab7c8": "bd62ee2ca2ae9edd97022b6c63655b9c",
".git/objects/b9/4371518ff1f79d07488f4764b730cd608fe6b9": "eee43106bf521cc4d5a34906856ca1f6",
".git/objects/b9/55b52d7801667f53bd276b08f505da6c76341a": "4dabc14733d4c7a99f25f7642a67c60a",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b21cb03c7982889217485abd813c778e548e9f": "37131675c7bf2bc36eb901451048f9cd",
".git/objects/ba/dde22eabffcdc9d54ede1adacaa7631c27b73b": "46e89089452b61a6e6afb7a54c26c3b4",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/5ec928fe1b425779ee9ed2cb861d0c7b39a279": "fe8b46abd2730f95161da3058a262aad",
".git/objects/be/7b4f32015c0cb6a4ff2a95aeb5f159faee894c": "c2afa942990caceb7c9ffd5e15a32f0f",
".git/objects/be/a88e1bb6680acedde5301d5f2d414f030a2bcc": "c63f99a3d1982c73c6995bc2dc1491d2",
".git/objects/be/aa2052042deb603fb48cc84ec4b16867afe696": "9fc87e602f1599bf4fdf125b31326878",
".git/objects/bf/6141977bb27380f1a20f8238967728b3f63841": "d7a4568fe1415d44004e03daa17f2bb6",
".git/objects/c0/c7872fdc5b0983be0bba22768356141c18d364": "0d54cc35aaf9ec825e887237e5a47e90",
".git/objects/c1/86b992fb0e80827938e8923e44209fe59ccdb1": "f5cfd816b22a4c9fd85d8cdbd79ff245",
".git/objects/c2/b2c20659a96fb11d5ee2b8c7c17f485f8d9afb": "45737282bb08065058751cb4a114efd5",
".git/objects/c2/c896c07b55313b84d7c7fd44ae21b0f69288a9": "6849a941a374d00d72b257091c8012fb",
".git/objects/c2/dc485f184d6e97fdd1c138f57a29cfa831837f": "167f21936a884535a13391cd1abaa519",
".git/objects/c4/15e94e0fdd9371511226ef6846ea3da74ae684": "7aebae564bb26eed2a0fa86488386464",
".git/objects/c4/be64c60f70d0a68de1982afc8900152775cfac": "dffaec393af02b6d367bf12d874c6d19",
".git/objects/c5/8c2b8088708d94e6ab6acfb1a6520a67758dd5": "dcdf450b70b10a1b75cbcc23696d78ce",
".git/objects/c6/3e647f23656a17add1c3f875db5ce8a6470d70": "d13060d8085696deeb0662bcf2df248f",
".git/objects/c7/0cca75c9344c1652b59f184fe8d14286603b04": "3ce0412191be89cb707e329c41a15099",
".git/objects/c7/40e4c9239ea5e5ce37f453d673d47b1ef15d27": "a84bca437b82c2e1a5daaeb9f48245fe",
".git/objects/c7/cfc7fdc01913c66e84c6ca42aa6665c98aaf0a": "483b62c51a7474c925e60a3c17a4f27a",
".git/objects/c8/1d3d87b64541e561d821bc0452ffd0a4b12a7b": "d11dab2db6bd7307759fe7658ee7f1ab",
".git/objects/c8/8f2be2d763c17bbcf00749f1cb4404d1eb391b": "8b44cd5a08a2db0bcf708a6fa95e9b30",
".git/objects/c8/a54b8d9dfe0d5b33d294110c7b6e43acc1b8cf": "187cb0b602b009013a2a0a5fcd58fbca",
".git/objects/c9/b77f6e24738e431301b8370fe9efe828b0d44c": "2dd804aa18980e0a21cf8a421c184974",
".git/objects/c9/e8f655c13ade020d339d0c77d47e1b62271685": "9629d378040edc30a6321d5e706aacf0",
".git/objects/ca/793d28e31ea1edfa406ef21c30b0e793a87163": "c285f0f2e86b7db6d196ab098332c92e",
".git/objects/ca/d9a18ca4360a66af1710633b471f03832050a6": "fecae0acab984c8b441b00ca797a8a4e",
".git/objects/cb/65746a6167a245195955711e01e140afed5cef": "076d702fde1f8dd5fa4d46be75982474",
".git/objects/cc/cf592c5241a373323964f26db3008d54527b40": "d58c56635ffa6882ac203e739af6a43a",
".git/objects/cd/72aac8db91c385af5a07916f749cc658a7748d": "e875f9a27a4f68eff1fedf607ba27b71",
".git/objects/ce/e5889cb2327ffb915c1647a89e7b012288a710": "700a74b3dc8ee6d6620a734c2f945492",
".git/objects/d0/c9bc91bc5e02da6e6d29c5995508b0fd43cb69": "54ed576c49ed3b27bc49a01192e6eafb",
".git/objects/d2/61c2632ccf33c2524f85ae072bdc76db7c3bb7": "f0742ef99b3726ff3fb2b6283c090b3e",
".git/objects/d3/2275ed00a196dc7dc3896f5a2772dfa4f0dcac": "4ee76afa21c5430d6bd692d836ec21b0",
".git/objects/d3/358bc4ce4b8044bdc05c8a29a786e8bc46fdac": "92fc068b8a839ec065f52cc9cab20420",
".git/objects/d3/3e1b8867fb5a0b897949dd1861b6ef413ead56": "14e4e292fd7b2a748d5a9561c577da6c",
".git/objects/d4/5e80e0769569b2d7dc2c3a9351020c8f149cac": "46a1ff09d3102905461a4436d9aad8fb",
".git/objects/d5/33f891b442364dd7108e47f2e5ccf62095056a": "8604d0193ed64cddfc81ecac9229d25a",
".git/objects/d5/3db3d5ea5b375fb1a9ee6fc406d0af34c00131": "f8499e0d799eabd28322a67bc46629c7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/65ac30e4bbe0c7ccf399ef5b8766494f3959cd": "4779ce03dc20d6e9ea368e77f0b976f2",
".git/objects/d7/96c8b999ea96f3d6e73ce34153260fc2539f37": "3fbd1dcbc5266b8f442df27332520c71",
".git/objects/d8/c0464bd88118b63964cb5d2f1afdcee820d881": "af0b500303b87d980698406e271544e1",
".git/objects/d9/4d55ec733a7ee232988a931dbcebd5e5f02fdc": "5e7b4d8646dbbabd69169ccea3684b7f",
".git/objects/da/6893c41c674347013f1364f3f4edc28446f2e7": "55c8e26d1279830bab43b534a70da73a",
".git/objects/da/f9d6ed010d5cdce302b4c4030c29faf6afb78c": "749505431190cff2c1d9d681a7a152bc",
".git/objects/db/a666ee016e4de18b397996b970bcc7f784e0cd": "bf8e7acb750d037096e90d83843a94da",
".git/objects/dc/23ff797e8af9aff65bd4c29d07eff1c0c26a69": "e2888f6e1561c5a589c986abb5a31e06",
".git/objects/dc/8e4682324e95bfcae775c52ac9062a652348f4": "95e6b484fde5b273ec0b759b945fcfc4",
".git/objects/dc/a0493ea94b73d0d119c31d84b777c61438ae3e": "e67c1e0bcc6663e3771a9536e60608ec",
".git/objects/de/63ebbbfd5e77637a3c3f022dc6a235e3005545": "87a73b293fbd46101e8f0da401505c58",
".git/objects/de/ed7c256dff3a12fd48851fdd3c9856799afd76": "4ed084f8436143ab6774cd64f4352435",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/dc5578b209ed29b30d7e21a181c22d5a45b7ed": "72e57f905c6bb529e2656e310b81340e",
".git/objects/e0/5a6be69e99ca1083cd149d6f6b3519adfc0a28": "51f15285d752aa7a58ba41da8785fac8",
".git/objects/e0/7548ca4e0a5f3f1b060faaf8e4c144010ca889": "1a7db3dcdaf6322c2c304b2f7212fabf",
".git/objects/e1/25adf9968d8c583575a025a19490e7ca8f9abe": "a7e316342bef62f5bbed5f825eafdd3b",
".git/objects/e2/5100f5b1b40a46d592d0adc3ee3739b6bbd9a7": "44a3658bd03559ff70efab48eef53dcf",
".git/objects/e4/f0cc67905c9d914adba2aa554afc866d66cda6": "eb7c4b5ec8c2eb05a869023a1dd54a85",
".git/objects/e6/a964bb3ebea5cc999d0ae0d2e61bb4f36db891": "9ab48eeb348693c22c31919367dd54ce",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/86d1c05aecd99a096159b9740ff1d996d704a8": "41a16f371e6708f27896a7b4da0fff47",
".git/objects/e8/5ff71ec37b2f78203159b16c6ad7dcc4f8d25c": "53877e30cdeca375db43c93b207d5ead",
".git/objects/e8/a3419cad9003d1bcc92aaf005563ae37b26e33": "f94ce9504d656fa59c2e5c4b6701a8d4",
".git/objects/ea/1b9bde8d87a27b87c4d44a657b4e226d8269a8": "0643fd6f473131adc086445bd5b17eee",
".git/objects/ea/ae66d0a4c7c663ee4363f63249cb07a204b82b": "b577de481067e372af4bf478a84d4c8a",
".git/objects/ec/8982a2e80f2209c63106d003522a60e15b33cd": "3e1e0f5f9dff3e5bc4400514ec33821f",
".git/objects/ec/b6a695ba6f2c4a15755426cd5395d484a8bef4": "bfe062c9c1b3f7121ef779f421136611",
".git/objects/ed/f16e4a028e49799254f5a89f0bfec55bdb0d31": "d0115fe22160d271541a043ffaaad4fb",
".git/objects/ee/0bbefdb984dd889fa3828e353ebf015f6761a9": "76bced0ba659be2079218f42dee03f40",
".git/objects/ee/f047d7cd1f62c9b7c6e2aac4a88953b61315b3": "468aaeafd01a4981a350a7a90d10b8cc",
".git/objects/ef/59229e410af08ed27e9a71e1cc081cc6c744ff": "1f1691e81272539d50d956af352b06c3",
".git/objects/ef/8746a71573e39dd262c4dfa55fbe60ad49ee8e": "06815eb24065240a5571e9b6c69c9212",
".git/objects/f0/2fb099e2f9a3e80a3b0143034451ee5dbaf209": "aeba35dc8c1ede3295a2c83e4bc59f99",
".git/objects/f2/b46bbbed8c315d12960e6e8b6592b45bc459ad": "ab104c0610a70798b1afc826286538f7",
".git/objects/f3/244fdad161c744225579b90eb3aa55cf46c024": "0cbffb14e155dc7e5db134f84436e1f9",
".git/objects/f4/435e15a0ccd3e10e91b0c44188c5ee22f50095": "2b6641dad5a2ce6a5ba1f09658fcd352",
".git/objects/f4/7514337a529e704bcad38763a549cd96817939": "5d1774ad10b1413db4d4a2c77c187b13",
".git/objects/f5/6327ad570200044483d9f8f4ce5a3d6f5288d4": "a5092124a6680e177ab6f4d11dc5a71d",
".git/objects/f5/8875a55e4cf764d1f04c4d188147937a794eb6": "bfd62d77a59607c24adcc366daf5562f",
".git/objects/f5/c59e49ccaf8668f4a19d0903308f23f7606ad3": "7c4b73aa46ac15badb47222e6334e4cd",
".git/objects/f5/cc95e2d2653ad4ca621562df628d3b60e9f4ff": "ba484a429281aba5e7ab861cacd5d7bd",
".git/objects/f6/208b219e7a6824806716f7fc1233e4364b92a4": "387b05550ff9c59b5f4e627cceacd534",
".git/objects/f6/9fe79ad93a03ec3bf0788dd4a084c17c626ec0": "096b3da40fa53c01c08d0043041c565e",
".git/objects/f7/aa911f3a8be8c0914b55e0d81fcdec75c8e792": "885b548dfcf615cb12d45f3952a1b3c3",
".git/objects/f8/fc3f057ae4686b37c3806e1e529b5351913e92": "5ac3915859900ba09a9fb412f7b66356",
".git/objects/f9/e65a05f978012efaa28d363b615023765485bd": "20accdedf5d384aae18c8b22ae80732b",
".git/objects/fc/92adfacae9928ca7ba642e321132f83e3e8b8a": "51bb026bc3c3b2fcc03f556a97489b55",
".git/objects/ff/5d8bc575bb9dca85ba5ddf678fb4c0d7247e54": "aee30b45d02aeecbb804b214074000a4",
".git/objects/ff/9f55ab72f12ec699055aecf8d41e70d0fb590a": "3dacc2779b2fe1c36b30217095cde948",
".git/refs/heads/main": "5e2f395d2accde9f7c37550f17f20bb3",
".git/refs/remotes/origin/main": "5e2f395d2accde9f7c37550f17f20bb3",
"assets/AssetManifest.bin": "55e321450a6604156cc01a3011853a24",
"assets/AssetManifest.bin.json": "43c96059c4b8195630297fa5d909f498",
"assets/AssetManifest.json": "e1da21c1fef850285d1a9c694e79566e",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/icons/angle-left.svg": "a881ffe2cdd1b443b4fef82f8e4cf323",
"assets/assets/icons/apk.svg": "a4e1674a0b75106f1178172214b927d4",
"assets/assets/icons/apks.svg": "82c47d7ea8374b4e0c2a153c41debe82",
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
"assets/assets/images/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/images/Image%2520Banner%25202.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/images/Image%2520Banner%25203.png": "ac22df8189dc403ff2e113489fb114b4",
"assets/assets/images/logo_smash.png": "30f5c4c81810f380ac547404717aab5f",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/Profile%2520Image.png": "07a16c1fa377ead829efef7e95ffa5c4",
"assets/assets/images/splash.png": "c5058f18437d1d06c2e02ccdf6342b82",
"assets/assets/images/splash_1.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/images/splash_2.png": "3580b1c0bb9f244b51d8042b8e762bf5",
"assets/assets/images/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
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
"main.dart.js": "1e28f83aacd04594e74ab0c2e0f1a878",
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
