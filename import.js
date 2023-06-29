// var parseString = require("xml2js").parseString;
// var axios = require("axios");
// var xml2js = require("xml2js");
// const yaml = require("js-yaml");
// const fs = require("fs");
// var xmlUrl =
//   "https://aveon.net.ua/products_feed.xml?hash_tag=7b71fadcc4a12f03cf26a304da032fba&sales_notes=&product_ids=&label_ids=&exclude_fields=&html_description=0&yandex_cpa=&process_presence_sure=&languages=ru&group_ids=";
// var builder = new xml2js.Builder();

// axios
//   .get(xmlUrl)
//   .then(function (response) {
//     var xmlData = response.data;

//     parseString(xmlData, function (err, result) {
//       if (err) {
//         console.error(err);
//       } else {
//         // Распечатываем полученный объект
//         result.yml_catalog.shop[0].offers[0].offer[0].price[0] = "100";
//         console.log(result.yml_catalog.shop[0].offers[0].offer[0]);

//         var xmlString = builder.buildObject(result);

//         const filePath = "./file.xml";
//         fs.writeFile(filePath, xmlString, (err) => {
//           if (err) {
//             console.error("Ошибка при сохранении YML-строки:", err);
//           } else {
//             console.log("YML-строка успешно сохранена в файл:", filePath);
//           }
//         });
//       }
//     });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

var parseString = require("xml2js").parseString;
var axios = require("axios");
var xml2js = require("xml2js");
const yaml = require("js-yaml");
const fs = require("fs");
var xmlUrl =
  "https://cartelua.com.ua/products_feed.xml?hash_tag=db3a2b8bfd147844306962b72205a768&sales_notes=&product_ids=1881242378%2C1881191994%2C1879803042%2C1879782690&label_ids=&exclude_fields=&html_description=0&yandex_cpa=&process_presence_sure=&languages=ru&group_ids=";
var builder = new xml2js.Builder();

axios
  .get(xmlUrl)
  .then(function (response) {
    var xmlData = response.data;

    parseString(xmlData, function (err, result) {
      if (err) {
        console.error(err);
      } else {
        // Распечатываем полученный объект
        result.yml_catalog.shop[0].offers[0].offer[0].price[0] = "100";

        var xmlString = builder.buildObject(result);

        const filePath = "./file.xml";
        fs.writeFile(filePath, xmlString, (err) => {
          if (err) {
            console.error("Ошибка при сохранении YML-строки:", err);
          } else {
            console.log("YML-строка успешно сохранена в файл:", filePath);
          }
        });
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
