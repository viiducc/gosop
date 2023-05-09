'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1b8e35fdedc584f7e725cd1c198b9d45",
"index.html": "db7a6c9a13629d670dc5f32e046d92b2",
"/": "db7a6c9a13629d670dc5f32e046d92b2",
"main.dart.js": "3fcf47b6631d6aedd7adea68cc8c8029",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ff97e982e7fb998ab65ec8d0f896709",
"assets/AssetManifest.json": "445cb889bd0c59afbd1d102cd735b5a7",
"assets/NOTICES": "e66b3b22c6bed8d23cc6bc346dbae678",
"assets/FontManifest.json": "aa6ab83af76d035604f798eaa743140a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svg/ic_phone.svg": "6077da76059ca4ce222661ee5d7c3f18",
"assets/assets/images/svg/img_onboarding_love.svg": "c40aae931240a0db58b090c17dac6e37",
"assets/assets/images/svg/ic_television.svg": "468294af2a864f45c6f68577cce92f73",
"assets/assets/images/svg/img_onboarding_shopping.svg": "01a211a675d3ce44f5f591b8570fdb41",
"assets/assets/images/svg/ic_eye_slash.svg": "4621f25716344f28c3aa1914f6baa48b",
"assets/assets/images/svg/ic_note.svg": "24d311499cd9feaaf4d8834544626b99",
"assets/assets/images/svg/ic_filter.svg": "02a62405b91c157b2bf106021a915f2b",
"assets/assets/images/svg/ic_storefront.svg": "77b1b28481f5eeb15e84bff20c13fb8c",
"assets/assets/images/svg/ic_medal.svg": "2108a6a25f13c77b969c9457030ec45b",
"assets/assets/images/svg/ic_gender_intersex.svg": "6582699a17d646d1fe55ee73309a4d64",
"assets/assets/images/svg/ic_diamond.svg": "194fa5e13941960cecb5d1e6242fb7b5",
"assets/assets/images/svg/img_silver_card.svg": "62d591426a8a398de901b456aa03d759",
"assets/assets/images/svg/ic_globe.svg": "4869ca0475922308afe947ef9ff6fb04",
"assets/assets/images/svg/ic_success.svg": "a6b71a61c58939431141f8069be6d820",
"assets/assets/images/svg/ic_small_logo.svg": "4e8b4c34ed648df07485b4379a6e1ecd",
"assets/assets/images/svg/ic_lockkey.svg": "1c30e0e7bfb3c45bf1c735749638fa88",
"assets/assets/images/svg/ic_security.svg": "286fe322d898f5388e033b9faa922ecf",
"assets/assets/images/svg/ic_dot_three_circle.svg": "f8201fab664728e1a1fb25f223918ebd",
"assets/assets/images/svg/ic_goso_reward.svg": "4e8b4c34ed648df07485b4379a6e1ecd",
"assets/assets/images/svg/ic_calendar_blank.svg": "af79786e606b2390e5c726074dd2d129",
"assets/assets/images/svg/ic_cake.svg": "8bcd3bc8e3a075d393fa98cc41cc2b52",
"assets/assets/images/svg/ic_menu_dot.svg": "adf9015ddf8789515210e987e86cc04e",
"assets/assets/images/svg/ic_plug.svg": "1f6c302bdc79ced2c9424ff6bc57c898",
"assets/assets/images/svg/ic_heart.svg": "90ebc3c118c303210e490931d4c8897a",
"assets/assets/images/svg/ic_dacebook_logo.svg": "c1294bd857e0699bfacbde562dcdebb8",
"assets/assets/images/svg/ic_lightbulb.svg": "7c19d61b571c1dbb212fc7afd2dbef5e",
"assets/assets/images/svg/ic_infomation.svg": "7af756c31aeb1669042be139036fc9d4",
"assets/assets/images/svg/ic_care_up.svg": "458ef0e2de151e071d605ee8e6bf37c6",
"assets/assets/images/svg/ic_camera.svg": "babd49612288089bce21565fff06ba52",
"assets/assets/images/svg/ic_coins.svg": "a8f7ce55cdf27b91c50e9ab6c8851a65",
"assets/assets/images/svg/ic_yellow_star.svg": "11eedd5100c0c0c0ace2ceaea85189b4",
"assets/assets/images/svg/ic_check_circle.svg": "4bf19e309980cc275c355cfdff1f39be",
"assets/assets/images/svg/ic_explore.svg": "40b0897f31a05964d7f4634a7e60c448",
"assets/assets/images/svg/ic_user.svg": "6678d24fa15a5a6a8d8876497ebea0ac",
"assets/assets/images/svg/ic_setting.svg": "1ef60d8f12acba2815923a97c7e06558",
"assets/assets/images/svg/ic_square.svg": "f910dce0939a4534037531d34b3a045d",
"assets/assets/images/svg/ic_half_star.svg": "473e85aac0bd8ebba593795b78d03f1a",
"assets/assets/images/svg/ic_image.svg": "bbd70b25478917d72b3ad39db4fe1e00",
"assets/assets/images/svg/ic_circle_notch.svg": "e33a82ffc0357e6ebb0b817d63f8cb4e",
"assets/assets/images/svg/ic_tshirt.svg": "ac3dc96a7005def41d5b8b8b5f9a8575",
"assets/assets/images/svg/ic_crown.svg": "1708d600561ae1b949458cef55d20ec2",
"assets/assets/images/svg/ic_health_medical.svg": "e5c45777a543953bf36cf917160ee21a",
"assets/assets/images/svg/ic_desktop_tower.svg": "b5340ec7621bf1607e6dd262b1e11db6",
"assets/assets/images/svg/ic_like.svg": "36a4eda851a5046ead40c1cdc45e5d64",
"assets/assets/images/svg/ic_mini_logo.svg": "0adac31bd0a40c77dc2dcba78beaa849",
"assets/assets/images/svg/ic_heart_full.svg": "1af22bd7d326559006de533bee89375d",
"assets/assets/images/svg/img_pro_gosoer_card.svg": "7580187dc134eb2d9f8636e5864c1e08",
"assets/assets/images/svg/img_platinum_card.svg": "bc75e0fcd1407a3424ad3df22a38b814",
"assets/assets/images/svg/ic_flag_banner.svg": "9200952336f990ed142538ed278234ae",
"assets/assets/images/svg/ic_pencil.svg": "4cf65a37da3ca47983e3e511e9b98f95",
"assets/assets/images/svg/ic_truck.svg": "23e1fa979dd41f91849fd219b34e7bcc",
"assets/assets/images/svg/ic_arrow_left.svg": "afb470c783cbbf31d49124538d1166ac",
"assets/assets/images/svg/ic_trash.svg": "aab59616069cc5b801ff5d444b1150e6",
"assets/assets/images/svg/ic_line_up.svg": "4caed2611a9d6657c8b010efa33173cc",
"assets/assets/images/svg/ic_caret_up.svg": "4c2324ecf399afffe373b3acce74943b",
"assets/assets/images/svg/ic_wrench.svg": "a8da8b7a496cc41420743829d3da8236",
"assets/assets/images/svg/ic_arrow_right.svg": "dca99c17fddc495e7cfb54c26fc627fa",
"assets/assets/images/svg/ic_chevron_down.svg": "cfd8c049a955da1bfcc7f254f5187937",
"assets/assets/images/svg/ic_clipboard_text.svg": "d29a46b351594e914760615f76fe8454",
"assets/assets/images/svg/ic_visa.svg": "62fe6a9c56449b3d5367d30bbe4bd154",
"assets/assets/images/svg/ic_eye.svg": "56bb2cc62eb75a56484a2d4ac56b2a10",
"assets/assets/images/svg/ic_head_phones.svg": "c09cd9623a67ccc17bbf901b02bda242",
"assets/assets/images/svg/ic_door.svg": "8ebfaca98eec7843e135d1aa20304bfc",
"assets/assets/images/svg/ic_lockkey_full.svg": "d65fc8210a734a805b31cb9027900ed1",
"assets/assets/images/svg/ic_package.svg": "583cbfab500c3d55b7808ef87309f1b7",
"assets/assets/images/svg/ic_gift.svg": "0975c1b71b450660922e62d058f74682",
"assets/assets/images/svg/ic_makeup.svg": "4a83f1f8439a0e177521393e69f0df54",
"assets/assets/images/svg/ic_squares_four.svg": "fc2ffa653a38138915732da7db05a8f6",
"assets/assets/images/svg/img_standard_card.svg": "6724f4a08b6eb3dd539d7da6685d7e02",
"assets/assets/images/svg/ic_health.svg": "0fa98e946dd5f6f3cd2d825b7257ef94",
"assets/assets/images/svg/ic_x_circle.svg": "8e3bb27a65b39f242160eeef0892e2ed",
"assets/assets/images/svg/ic_diamon.svg": "8cc9d27d5a0c531a000f24937efa1bb1",
"assets/assets/images/svg/ic_crown_simple.svg": "483a918817bd83c046d3376f6b2dafab",
"assets/assets/images/svg/ic_exits.svg": "12f380fa13e5ff49b8a88564bd5d6fba",
"assets/assets/images/svg/ic_ruler.svg": "ad0040858fcd9d409e1ba25972e28ea7",
"assets/assets/images/svg/ic_backpack.svg": "d13717685d11c7428078911961195492",
"assets/assets/images/svg/ic_caret_down.svg": "daa9ec53962069996908608c6f1dc642",
"assets/assets/images/svg/ic_radio_button_check.svg": "7e2a6d06b5167ac9c524d705b873217b",
"assets/assets/images/svg/ic_lightning.svg": "6dbf7b881913691967dc3a8204156e8d",
"assets/assets/images/svg/ic_support.svg": "dd03083f8ba8f953c69b51f810437fc4",
"assets/assets/images/svg/ic_arrow_down.svg": "7340a8c25c83232b83fe3171c939c7f4",
"assets/assets/images/svg/ic_wallet.svg": "33182bc24f66157f9fad713858aac0b4",
"assets/assets/images/svg/ic_email.svg": "fef96c747de543f2054d578a80e38309",
"assets/assets/images/svg/ic_logo.svg": "7abfc40fbc4752ff44ca95d280a50b66",
"assets/assets/images/svg/ic_shopping_cart.svg": "e4aedc91aae4de19572f1e61e18aebe3",
"assets/assets/images/svg/ic_health_and_medical.svg": "438411cc3e08866e43b3c266502b3eca",
"assets/assets/images/svg/img_onboarding_sale.svg": "13bc090c939f4307badad437a3957044",
"assets/assets/images/svg/img_default.svg": "b32e9b789378acf86f95e8233c1754ef",
"assets/assets/images/svg/ic_discount.svg": "a8b88b687678d7c609db697c892ca59d",
"assets/assets/images/svg/ic_chat.svg": "94be4a14786288e4a4fb7e0273a824f1",
"assets/assets/images/svg/ic_sport.svg": "e16b6ca53113f6d95ca631f19f507f33",
"assets/assets/images/svg/ic_standard.svg": "808c701518d7dce9951d985ff162a11e",
"assets/assets/images/svg/ic_question.svg": "88820b168e369a2abdf461796c669853",
"assets/assets/images/svg/ic_google_logo.svg": "8d7a3396e553c8a493277051ab56c1fd",
"assets/assets/images/svg/ic_house_line.svg": "e5f50408abafd1745a5d2954488a5db0",
"assets/assets/images/svg/ic_pinwheel.svg": "f6be1b893a46c034feb2a45632fed7d8",
"assets/assets/images/svg/ic_house.svg": "2862339c0c23fc37bd1d983ee163dd7a",
"assets/assets/images/svg/ic_check_square.svg": "91e2722e768b6857792653ec4947ceb6",
"assets/assets/images/svg/ic_scan.svg": "d1a433ea8fc0c1791e7b0495fe3175b7",
"assets/assets/images/svg/ic_arrow_circle_left.svg": "fd682c95c7e0e1e31cb68d134a79bac8",
"assets/assets/images/svg/ic_radio_button.svg": "b52548a5e5b151d56fe2c21f3bc30e7d",
"assets/assets/images/svg/ic_dots_three_vertical.svg": "c1c48153c8e7b4e1dbb42b769b816cac",
"assets/assets/images/svg/ic_master_card.svg": "796e9274a84b073218dc933ceea419ac",
"assets/assets/images/svg/ic_flying_saucer.svg": "d3e346a518ad105efb3b1981c24de6eb",
"assets/assets/images/svg/ic_full_star.svg": "38746d323e4c566372bcb37fcefd8ea5",
"assets/assets/images/svg/ic_search.svg": "0267d3adaaa787d17208c60b2aecc05e",
"assets/assets/images/svg/ic_shopping_bag.svg": "bc34010f331719c3db8a0623b3ddbb74",
"assets/assets/images/svg/ic_arrow_up.svg": "ac13328c9ecb1961b997a4e79ec08cc1",
"assets/assets/images/svg/ic_lightning_slash.svg": "d0490c4348a562ff2feebff881567375",
"assets/assets/images/svg/ic_buildings.svg": "ac0401b9bdf8fe1e92f3acf5e154d348",
"assets/assets/images/svg/ic_facebook_logo.svg": "d1d0419df968011a861e430444445959",
"assets/assets/images/svg/ic_star.svg": "b82015fbe143022c7d84986915f0085c",
"assets/assets/images/svg/ic_ticket.svg": "baff845db2b5b62c46b6db2323de4914",
"assets/assets/images/svg/ic_t_shirt.svg": "da978d24f1ef9746e9018a497d8ffead",
"assets/assets/images/svg/img_gold_card.svg": "c0ce5df3e8344663bb6061e45e393efd",
"assets/assets/images/svg/ic_check_circle_full.svg": "a4650e6b7bdf840fd5a4334d726ba950",
"assets/assets/images/svg/ic_pet.svg": "a9e8a252057e5a89b41eb8be3c29ac88",
"assets/assets/images/png/img_banner_today_suggestion.png": "e27e8039423b8f0e17a261cefc2f6295",
"assets/assets/images/png/img_card_dynamic_color.png": "d41e32de4bf164448e36c1c2e817d698",
"assets/assets/images/png/img_google.png": "89ab509970ca4c6ea41b71405b794bd2",
"assets/assets/images/png/img_app_logo.png": "35ebeb34d4eb43242a85eb33dfcc82d9",
"assets/assets/images/png/image_banner_new_coming.png": "3e84d6fc0c6615f8a686f58df8be4da0",
"assets/assets/images/png/img_money.png": "77534faccddc65bfbfced8bf29e16c71",
"assets/assets/images/png/img_logo_gradient.png": "05a7419638ec4c5c5baaa84b025a2098",
"assets/assets/images/png/img_facebook.png": "878665eea52a880f94d35bfe9cc8f381",
"assets/assets/images/png/img_goso_reward.png": "96ef1cd8d4a714ba5e7f21f34a1480c2",
"assets/assets/images/png/img_gift.png": "70ba237652e9d0c8f908a01058f32053",
"assets/assets/images/png/ic_chevron_up.png": "d4c40176cc93a6316af2863890d068a8",
"assets/assets/images/png/img_bag_dynamic_color.png": "99335bafc5378667640e67dcd3001fc2",
"assets/assets/images/png/img_calender_dynamic_color.png": "11b644b21b87ac8a4f538a06c85695b5",
"assets/assets/cfg/app_config_dev.json": "ac548cc4f45e74844f8f140dbad5f15f",
"assets/assets/cfg/app_config_staging.json": "ac548cc4f45e74844f8f140dbad5f15f",
"assets/assets/cfg/app_config_prod.json": "ac548cc4f45e74844f8f140dbad5f15f",
"assets/assets/fonts/SF-Pro-Italic.ttf": "1d3c53f13fe88258a8afc9cbb6d1de7e",
"assets/assets/fonts/SF-Pro-Display-Thin.otf": "b8348498f52b810645c3a60c5e89577a",
"assets/assets/fonts/SF-Pro-Display-SemiboldItalic.otf": "f55ed95d2a9fd5f73310d8ea4acf2bf1",
"assets/assets/fonts/SF-Pro.ttf": "f5d62f9c9835cd1a517c4800672187a3",
"assets/assets/fonts/SF-Pro-Text-UltralightItalic.otf": "37266031231b7d77e3cd1d96efb528d8",
"assets/assets/fonts/SF-Pro-Text-Heavy.otf": "29c2a7b066a38c0b90f37f1a116bb667",
"assets/assets/fonts/SF-Pro-Display-RegularItalic.otf": "d7d525f9c6b67180ece1636864777a10",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "07f6fd464d9325bcfd50cf7bfee737ca",
"assets/assets/fonts/SF-Pro-Rounded-Semibold.otf": "e7bd7dfa183dd109bce559b42aa15936",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "d3c55796a392852ee60f620ba8483e02",
"assets/assets/fonts/SF-Pro-Text-MediumItalic.otf": "54731a693021778fbdfb710368bd9d3a",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "fbff3f6ec16c92df94702e3897cd0b56",
"assets/assets/fonts/SF-Pro-Rounded-Regular.otf": "1000cfe09c0daeb47b3722dbe3805722",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "fcdc8a62436e08dc4e71217a41bef95a",
"assets/assets/fonts/SF-Pro-Display-Heavy.otf": "5c65570a734b814a0ccfb59c9d0337a7",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "c352b4047b64a092492dcfd6c1172626",
"assets/assets/fonts/SF-Pro-Rounded-Black.otf": "ae7951fa3ac9727195ae621526ac9bb0",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "e1bfed1197a7515f11155ef95de2c947",
"assets/assets/fonts/SF-Pro-Text-BlackItalic.otf": "e4705204a7d7095e005c67cc9f3f47d9",
"assets/assets/fonts/SF-Pro-Text-Black.otf": "6a2cead061bfd81de03cd392ac4186c6",
"assets/assets/fonts/SF-Pro-Rounded-Light.otf": "d10143b1facec3ab08f1517009684307",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "56a46a3c3683b3ee8de690c0a3c40026",
"assets/assets/fonts/SF-Pro-Text-Ultralight.otf": "629c32dec3e565da2eeafce090ac79f1",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "8b047269504f0b39bafc4c4889c565ca",
"assets/assets/fonts/SF-Pro-Text-Thin.otf": "3bed48348565a2a55b3912b3d17569da",
"assets/assets/fonts/SF-Pro-Display-MediumItalic.otf": "95f4bb7c9882816a63296800d6cd26e6",
"assets/assets/fonts/SF-Pro-Display-HeavyItalic.otf": "c31faabc720426a386fa1fa53bbf0352",
"assets/assets/fonts/SF-Pro-Display-Ultralight.otf": "40fdd5a5df3f2b29285df268f4577191",
"assets/assets/fonts/SF-Pro-Display-UltralightItalic.otf": "80ec3a27dc6569cbc3346eb933baff93",
"assets/assets/fonts/SF-Pro-Display-LightItalic.otf": "e1ce73731322b928c9b64dfeebf11ba7",
"assets/assets/fonts/SF-Pro-Rounded-Thin.otf": "1c1d0c1d45641285d950b567a8c10590",
"assets/assets/fonts/SF-Pro-Text-ThinItalic.otf": "004b3e689c4e10cbd3ecf7e2a0e003f5",
"assets/assets/fonts/SF-Pro-Display-BlackItalic.otf": "1ebd72459dc14af0406aa74463254b32",
"assets/assets/fonts/SF-Pro-Display-Black.otf": "9b8f7f87323e117f73737c4d1b1f0111",
"assets/assets/fonts/SF-Pro-Rounded-Medium.otf": "8bf6ccae0719a06afff2c1d8cf51e4f4",
"assets/assets/fonts/SF-Pro-Text-BoldItalic.otf": "c5a6dfe516f932d6dc57010af441f221",
"assets/assets/fonts/SF-Pro-Text-RegularItalic.otf": "b3f3549fcebb11f3bd21abb941bdfdfe",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "f8fedd60b136be16ed8b9f5cfe214e7a",
"assets/assets/fonts/SF-Pro-Text-HeavyItalic.otf": "b08df9b706bd69014095c12f90910497",
"assets/assets/fonts/SF-Pro-Display-ThinItalic.otf": "0ddef1e3a70ee81a94db66904748d504",
"assets/assets/fonts/SF-Pro-Text-LightItalic.otf": "705aa8ab275510cc5d299e174edfbc31",
"assets/assets/fonts/SF-Pro-Rounded-Ultralight.otf": "465b320c6b77377d7f98ca9c672b02a2",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "e7c769e65101b5be4641357a3a488998",
"assets/assets/fonts/SF-Pro-Rounded-Heavy.otf": "dd7d16d6de3e9c17d1180988d9379f4f",
"assets/assets/fonts/SF-Pro-Display-BoldItalic.otf": "2ce904f28b96079374c3e8a487ebf349",
"assets/assets/fonts/SF-Pro-Rounded-Bold.otf": "7df71c3d7ac77b133d15dff5811cb557",
"assets/assets/fonts/SF-Pro-Text-SemiboldItalic.otf": "5ee98d650053d52a6c1ca0de963bdce8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
