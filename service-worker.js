/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "309292f06401da3376d64c2e98ff0162"
  },
  {
    "url": "acknowledge/gridsome.html",
    "revision": "3714416286e9ce12608098d327197abc"
  },
  {
    "url": "activity/index.html",
    "revision": "933a2558e05d25cb34f30f7b2c4e0f6d"
  },
  {
    "url": "activity/manage-everything/day.html",
    "revision": "777b104986f102ec80c8732212c6b9f9"
  },
  {
    "url": "activity/manage-everything/self.html",
    "revision": "5d2d84f731446b44ba465f9c4e60ff26"
  },
  {
    "url": "activity/new-know/index.html",
    "revision": "ceb5a479ddb192004903a099c03c0e17"
  },
  {
    "url": "activity/time-flies/index.html",
    "revision": "6cb24022d057fc32f281cc170a20328e"
  },
  {
    "url": "assets/css/0.styles.1aba5bd9.css",
    "revision": "fc50408e2834824ad69cf0138c9e2043"
  },
  {
    "url": "assets/img/f7.55cfd77b.png",
    "revision": "55cfd77b3752ff3cfa0f70c9cb0e0429"
  },
  {
    "url": "assets/img/f9.686f9923.png",
    "revision": "686f99233490b8687e0635180718c05b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bdce2556.js",
    "revision": "ed1a3a9ec7f6bc7edec8e98670187e9e"
  },
  {
    "url": "assets/js/10.08b11a29.js",
    "revision": "e6ada688da47c0eb60ce1026817414ee"
  },
  {
    "url": "assets/js/11.b9edf876.js",
    "revision": "41db3be58f59251c18a8a1743e21d686"
  },
  {
    "url": "assets/js/12.9264824d.js",
    "revision": "e89860f501102d41a6f6b997f7182124"
  },
  {
    "url": "assets/js/13.2704dbf3.js",
    "revision": "30c4b9aa135f484509646595af9b60fd"
  },
  {
    "url": "assets/js/14.f8ace8c2.js",
    "revision": "44761b28a76ae0d48660e236ba1ff599"
  },
  {
    "url": "assets/js/15.035dff3c.js",
    "revision": "e8844e85feec272f9bd0aa4516a6aafb"
  },
  {
    "url": "assets/js/16.a14de042.js",
    "revision": "1a844e47a49942cf36176f1568b0e92d"
  },
  {
    "url": "assets/js/17.c2660286.js",
    "revision": "ea5b6da5246ce8c354778c93d3243c6b"
  },
  {
    "url": "assets/js/18.0868dbcd.js",
    "revision": "6555896a3e72e6694704032e8c213cf6"
  },
  {
    "url": "assets/js/19.b84f6778.js",
    "revision": "303a562533d13d949c71b736575aa078"
  },
  {
    "url": "assets/js/2.30172828.js",
    "revision": "8718c6efa076434ad6dc01277cae7e64"
  },
  {
    "url": "assets/js/20.b94801f8.js",
    "revision": "c2966766fe4baf2b421b6f68a55ab3d3"
  },
  {
    "url": "assets/js/21.91b686ce.js",
    "revision": "4997033a18f59ed54bb53188ac8b9189"
  },
  {
    "url": "assets/js/22.52aff380.js",
    "revision": "e19e8ae82ceccdd34538dbcbee5fdf78"
  },
  {
    "url": "assets/js/23.401c3b2e.js",
    "revision": "90bd68f0b7612e51d4bd87b225fe83f9"
  },
  {
    "url": "assets/js/24.cb2d0184.js",
    "revision": "3852572d43906f6d27a4f2fefe52ea7b"
  },
  {
    "url": "assets/js/25.5102aeeb.js",
    "revision": "80291df8c84115341c562797b2f276fc"
  },
  {
    "url": "assets/js/26.f2dbf133.js",
    "revision": "19e357a9828f055da999e02ba87b0313"
  },
  {
    "url": "assets/js/27.ce183a2b.js",
    "revision": "43e0aa2490be8ae4f37301d4890f5771"
  },
  {
    "url": "assets/js/28.004682b7.js",
    "revision": "153f14b44a6a7fda7a765b3113c57808"
  },
  {
    "url": "assets/js/29.d1abe813.js",
    "revision": "7b799cf7c81180cab1942b5a9dcad0ce"
  },
  {
    "url": "assets/js/30.9d1013d1.js",
    "revision": "a0fc4a4f73902cc637788ddffcc30a97"
  },
  {
    "url": "assets/js/31.7884c157.js",
    "revision": "a5f2af77332e9ada83c8142c266310d2"
  },
  {
    "url": "assets/js/32.c02ee5c7.js",
    "revision": "2b666f3dc76c137b2f7df5f36fc46243"
  },
  {
    "url": "assets/js/33.826878fd.js",
    "revision": "c829bedac79bef48502d4e292ddf9377"
  },
  {
    "url": "assets/js/34.545ec646.js",
    "revision": "df3f1f7940de118b3aaf073662c97ecc"
  },
  {
    "url": "assets/js/35.9f76b0ae.js",
    "revision": "ee3d112da1fe0b370d9c80bc4f26b2b3"
  },
  {
    "url": "assets/js/36.51ac66b0.js",
    "revision": "b19a67e498650170ca9335ae5106b7db"
  },
  {
    "url": "assets/js/37.0bb16130.js",
    "revision": "6c53f17c0240f6ae9a9d7528e68bed17"
  },
  {
    "url": "assets/js/38.334fca93.js",
    "revision": "f357d53cc76e74f94d775b01eaf030c1"
  },
  {
    "url": "assets/js/39.19e9d5ab.js",
    "revision": "07693baf06bcbe6678b912ed7713c361"
  },
  {
    "url": "assets/js/40.af8a9c78.js",
    "revision": "90a6b72e8bf7e9e6a8a5ac0882bb1b19"
  },
  {
    "url": "assets/js/41.4a4b5c35.js",
    "revision": "2707671e21482ed82f9aa273379c559d"
  },
  {
    "url": "assets/js/42.ea5af79e.js",
    "revision": "f60bbaebdfef04aaf1e269f91f2ec40d"
  },
  {
    "url": "assets/js/43.6f7a16c6.js",
    "revision": "362e2977e51b49fb1cd3eaa7a378956e"
  },
  {
    "url": "assets/js/44.68413376.js",
    "revision": "450e6fdb0ab5d439ef21d94e03ebfb47"
  },
  {
    "url": "assets/js/45.f41c979e.js",
    "revision": "05b84f00de1efe57d18dcf10c06bb4ff"
  },
  {
    "url": "assets/js/46.96da0a95.js",
    "revision": "19dc4fb84079e7d0dbce2c4ef298a56d"
  },
  {
    "url": "assets/js/47.251096c8.js",
    "revision": "912e3495ef40ac1f31f7668e17570d24"
  },
  {
    "url": "assets/js/48.c9135ad3.js",
    "revision": "5ddfb189aa8a1ca93ca2280ebebb0c5b"
  },
  {
    "url": "assets/js/49.23a55403.js",
    "revision": "6e2d0b987b77c4664bdd736fc17f7ebc"
  },
  {
    "url": "assets/js/50.5ab559b8.js",
    "revision": "1dd0ec6836151e3d17414d36308853e3"
  },
  {
    "url": "assets/js/51.fdd42fc0.js",
    "revision": "c7a4c2dd3ec50afaea19b8cf905200c5"
  },
  {
    "url": "assets/js/52.9bcb2864.js",
    "revision": "954d4381e127dcad1565e73ab0301156"
  },
  {
    "url": "assets/js/53.0b511418.js",
    "revision": "5185bfdb7a8257b31825576790e45c31"
  },
  {
    "url": "assets/js/54.278079c6.js",
    "revision": "f89019bc5b9fd9309cf0157aeda8119e"
  },
  {
    "url": "assets/js/55.c6be445f.js",
    "revision": "24dd16274b9ded5db63574eafeddbff3"
  },
  {
    "url": "assets/js/56.f0ececb8.js",
    "revision": "42f099fa567d012469296a6da1733695"
  },
  {
    "url": "assets/js/57.4df62ce7.js",
    "revision": "09aa80cb652b45d134f6a28550781098"
  },
  {
    "url": "assets/js/58.b827fd11.js",
    "revision": "32618646b7d5fbbaf00ff3019e42bfda"
  },
  {
    "url": "assets/js/59.b804b9a5.js",
    "revision": "091a84dc5b4af66a77cd78a353e77ec6"
  },
  {
    "url": "assets/js/6.b5802922.js",
    "revision": "96d2450fe57f5b1760a8c45e83b6e0c1"
  },
  {
    "url": "assets/js/60.4c43f236.js",
    "revision": "7e0373aa0e0e55dbd34d893a09750775"
  },
  {
    "url": "assets/js/61.2609fe82.js",
    "revision": "537b5f39f957d0accc5ea5ef372765da"
  },
  {
    "url": "assets/js/62.ddf2d6a8.js",
    "revision": "13a1fc07261c3ad19cb629303d7b0813"
  },
  {
    "url": "assets/js/63.cde30b92.js",
    "revision": "088b565b37181cfd14f20998292766d4"
  },
  {
    "url": "assets/js/64.87789fbc.js",
    "revision": "eed65c0ac50f12eee8c9be573685c479"
  },
  {
    "url": "assets/js/65.364a11d0.js",
    "revision": "689df9957316a0b08561e7f9a9f476aa"
  },
  {
    "url": "assets/js/66.abc226bf.js",
    "revision": "6313fa43860768df1a3f04e68a62e558"
  },
  {
    "url": "assets/js/67.19ff90ba.js",
    "revision": "5bc62e15a8ab4c50d8001978f52c973d"
  },
  {
    "url": "assets/js/68.1899689e.js",
    "revision": "47ad89e1966145fe767ce1a4529a6df0"
  },
  {
    "url": "assets/js/69.e016da78.js",
    "revision": "b0443a1313604261c31b174570425970"
  },
  {
    "url": "assets/js/7.dc2190a2.js",
    "revision": "31ab14e6d5c7dd1b28766de5eb86fb57"
  },
  {
    "url": "assets/js/70.f9309fd1.js",
    "revision": "3d10f6749c4da09554b5b4cdc9a01417"
  },
  {
    "url": "assets/js/71.83a705ca.js",
    "revision": "f2d368de7bb0773239b90514cf3a6d12"
  },
  {
    "url": "assets/js/72.8c18f196.js",
    "revision": "a730c514eca236f1cfe02d66e7dd30bf"
  },
  {
    "url": "assets/js/73.59862692.js",
    "revision": "f613c5842124446a6a18b611d11acfcd"
  },
  {
    "url": "assets/js/74.94a11b4e.js",
    "revision": "f1682703af8d978457f3e5fa6b177ee5"
  },
  {
    "url": "assets/js/75.27b31ad1.js",
    "revision": "b485c8bc30db80ea0e7c893730f0d4b8"
  },
  {
    "url": "assets/js/76.9d0b6ded.js",
    "revision": "25a8945afb688c49b0c39a28baad24d8"
  },
  {
    "url": "assets/js/77.ee5483ba.js",
    "revision": "6f5814e62be6dce08dfc566aad83cf31"
  },
  {
    "url": "assets/js/78.33a0532f.js",
    "revision": "5b99482e19e6eb889f2b6f0b4c81d54f"
  },
  {
    "url": "assets/js/79.7335c1e7.js",
    "revision": "459cddad41c709165f9e686595d97304"
  },
  {
    "url": "assets/js/8.c37b9402.js",
    "revision": "e369087bfd75533ef0e3db1c5037dbf4"
  },
  {
    "url": "assets/js/80.70abaae1.js",
    "revision": "5daad85636933f6bc9840af433cb7346"
  },
  {
    "url": "assets/js/81.d23a02d2.js",
    "revision": "0184596ca8daf27f4196374207d0d2e3"
  },
  {
    "url": "assets/js/82.eb4bc2da.js",
    "revision": "7c735ec498b25a9354c1db53ef14e6c5"
  },
  {
    "url": "assets/js/83.129852b4.js",
    "revision": "f6aed26fa1f0b5ec540012e9ebe38c02"
  },
  {
    "url": "assets/js/84.5ae48a9c.js",
    "revision": "6faf4e602c6ba3b6c748be91ce5865b1"
  },
  {
    "url": "assets/js/85.06dc5196.js",
    "revision": "77b9f1918e58ce49347b8bb8469238d9"
  },
  {
    "url": "assets/js/9.c974a6d2.js",
    "revision": "1711a5ba4e1a07f75e11cc425a965784"
  },
  {
    "url": "assets/js/app.c47aa480.js",
    "revision": "4d27262cfe832f384ebd497407fafec5"
  },
  {
    "url": "assets/js/vendors~flowchart.9ca3ef26.js",
    "revision": "742293fe520fd8e617d0d2d13cdbbec1"
  },
  {
    "url": "assets/js/vendors~notification.9b22a747.js",
    "revision": "da895f05c61ee81dd603d434c3e20776"
  },
  {
    "url": "basic-skills/flowchart/index.html",
    "revision": "b7577a5cda57ebabc57d93e704a1bb11"
  },
  {
    "url": "basic-skills/heap/animated.html",
    "revision": "f7504cc87464dce09855a7fc3a48235f"
  },
  {
    "url": "basic-skills/heap/binomial.html",
    "revision": "508c58396cb4d60be517136d103794bf"
  },
  {
    "url": "basic-skills/heap/divider.html",
    "revision": "98e03030beacb01f4518c42a4ba691d6"
  },
  {
    "url": "basic-skills/heap/draft.html",
    "revision": "12fd74f15c0998a17a414310141df9a2"
  },
  {
    "url": "basic-skills/heap/index.html",
    "revision": "33ddf10a2b9f818ae87694f6c363a1ff"
  },
  {
    "url": "basic-skills/heap/init.html",
    "revision": "065565f8019b7df02ff228c9a97d361b"
  },
  {
    "url": "basic-skills/heap/sort-animated.html",
    "revision": "27febe34f61cdb31f23941d4986b8e47"
  },
  {
    "url": "basic-skills/heap/sort.html",
    "revision": "b38e330bf8179e72f290569ea475daa0"
  },
  {
    "url": "basic-skills/index.html",
    "revision": "3b1d049be5e2029bdfcfb27a3897c36b"
  },
  {
    "url": "basic-skills/queue/index.html",
    "revision": "e1b6ef25126d4c3d35e392e0625fdd6f"
  },
  {
    "url": "basic-skills/queue/priority-queue.html",
    "revision": "da855565594783a929d1b60109e2c620"
  },
  {
    "url": "basic-skills/stack/index.html",
    "revision": "dd285f0e349bb5582328897d9588cf4f"
  },
  {
    "url": "basic-skills/stack/min-stack.html",
    "revision": "e9847b0a6dd9706018f44b890d55acfe"
  },
  {
    "url": "basic-skills/tree/avl.html",
    "revision": "def90cadf6869817b6ba85456e64d9cc"
  },
  {
    "url": "basic-skills/tree/bst.html",
    "revision": "567aafe6272fa0cac9f8a6c81763570a"
  },
  {
    "url": "basic-skills/tree/display.html",
    "revision": "a3f1ac5773dedabfa650accbeb1ae839"
  },
  {
    "url": "basic-skills/tree/display2.html",
    "revision": "d73b5ffc6152c037e8b93ff4434b1608"
  },
  {
    "url": "basic-skills/tree/index.html",
    "revision": "ccf140594bfece9d1c60d8f8445e1996"
  },
  {
    "url": "basic-skills/tree/tree-node.html",
    "revision": "478d7f0a07ade2fd2d1cfac637025b72"
  },
  {
    "url": "basic-skills/tree/trie.html",
    "revision": "c3d958ccff3d77cb5bf5b9ccc5a5a5f8"
  },
  {
    "url": "index.html",
    "revision": "0fc1ae6a5e77464720edfe137222785e"
  },
  {
    "url": "language/ES6/class.html",
    "revision": "7dd31421573b1d3b6917ff4f2585796e"
  },
  {
    "url": "language/ES6/index.html",
    "revision": "1e20e48945c31396e2a1b685bf249951"
  },
  {
    "url": "language/index.html",
    "revision": "8ef8140a355b4162a41799a4d5f91181"
  },
  {
    "url": "question/index.html",
    "revision": "5bea2c864cde730d7e11ef69b79db144"
  },
  {
    "url": "question/restart-required.html",
    "revision": "18f90c418f837f6db81b6b60897b5c9b"
  },
  {
    "url": "readings/draft.html",
    "revision": "2c182d3fbdbfd893fb2081bf24ac51da"
  },
  {
    "url": "readings/index.html",
    "revision": "ca89b2669c061a78191aa71a195b1502"
  },
  {
    "url": "things/configure-center/index.html",
    "revision": "2da2cc9951fa4ef6a0ebe7a300c73f7a"
  },
  {
    "url": "things/express-with-socket/index.html",
    "revision": "cc2af94ad632b2b4dca5f34dbcf9c126"
  },
  {
    "url": "things/git/index.html",
    "revision": "4b2e1750110ba3125221a7a0feae738b"
  },
  {
    "url": "things/grpc/index.html",
    "revision": "2265436a199d2091e10066c5b014cd50"
  },
  {
    "url": "things/headless-cms/index.html",
    "revision": "1760ded5daf450eab001c79a21dc4d7f"
  },
  {
    "url": "things/headless-cms/self-classification/index.html",
    "revision": "e2c786c14bc769e28982334855cf0ef1"
  },
  {
    "url": "things/headless-cms/strapi.html",
    "revision": "16d6b881d585bfa83d1ef62390481378"
  },
  {
    "url": "things/index.html",
    "revision": "d3442d46b561bc2b9cfc0fb3eb8c4300"
  },
  {
    "url": "things/node-packages/frequent-package.html",
    "revision": "7450578e4eb49c8ff6d2ff09332f585b"
  },
  {
    "url": "things/node-packages/index.html",
    "revision": "52120c12a10b574c204c6f4386baf36b"
  },
  {
    "url": "things/node-packages/within-scaffold.html",
    "revision": "cee82de61cafde5560e89adb112fbb96"
  },
  {
    "url": "things/portal-wifi/index.html",
    "revision": "2f7f5ab84a502279f030b351d7d91c56"
  },
  {
    "url": "things/portal-wifi/wechat.html",
    "revision": "23fcb9619fe040fd5cc513fcd7fe6595"
  },
  {
    "url": "things/specs/index.html",
    "revision": "65798a4fbcc512414662559b0a08ab8e"
  },
  {
    "url": "vue-skill/functional/index.html",
    "revision": "5ddeb3182cc14eaaf64bfba78b62d9fc"
  },
  {
    "url": "vue-skill/functional/play.html",
    "revision": "e38569a102b13e85f9e94867b3ec135f"
  },
  {
    "url": "vue-skill/functional/v-m-1.html",
    "revision": "410772a64de5cf5cdc05ffcd832d86e8"
  },
  {
    "url": "vue-skill/functional/v-m-2.html",
    "revision": "149feea740d7cf149cd30b2362297799"
  },
  {
    "url": "vue-skill/index.html",
    "revision": "3d0499b7c56f2bcc00a65e4670b693da"
  },
  {
    "url": "vue-skill/v-model/1-plain.html",
    "revision": "ed5bf98236fa46318b31d78d67621121"
  },
  {
    "url": "vue-skill/v-model/index.html",
    "revision": "82d232504b6df1d4fbd8c770680ed729"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
