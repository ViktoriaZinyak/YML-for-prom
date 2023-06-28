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
//         const ymlString = yaml.dump(result);
//         // const downloadLink = document.createElement("a");
//         // downloadLink.href =
//         //   "data:text/yaml;charset=utf-8," + encodeURIComponent(ymlString);
//         // downloadLink.download = "file.yml";
//         // downloadLink.innerHTML = "Скачать YML";

//         // // Добавление ссылки на страницу
//         // document.body.appendChild(downloadLink);

//         // console.log("XML-строка преобразована в YML и готова для скачивания.");

//         // console.dir(result.yml_catalog.shop[0].offers[0].offer[0].price[0]);
//         // console.log("object");
//         // var xmlString = builder.buildObject(result);
//         // console.log("done");
//         // console.dir(xmlString);
//         // console.log("done1");
//         const filePath = "./file.yml";
//         fs.writeFile(filePath, ymlString, (err) => {
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
//         // const ymlString = yaml.dump(result);
//         // const downloadLink = document.createElement("a");
//         // downloadLink.href =
//         //   "data:text/yaml;charset=utf-8," + encodeURIComponent(ymlString);
//         // downloadLink.download = "file.yml";
//         // downloadLink.innerHTML = "Скачать YML";

//         // // Добавление ссылки на страницу
//         // document.body.appendChild(downloadLink);

//         // console.log("XML-строка преобразована в YML и готова для скачивания.");

//         // console.dir(result.yml_catalog.shop[0].offers[0].offer[0].price[0]);
//         // console.log("object");
//         // var xmlString = builder.buildObject(result);
//         // console.log("done");
//         // console.dir(xmlString);
//         // console.log("done1");
//         const filePath = "./file.xml";
//         fs.writeFile(filePath, result, (err) => {
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
  "https://aveon.net.ua/products_feed.xml?hash_tag=7b71fadcc4a12f03cf26a304da032fba&sales_notes=&product_ids=&label_ids=&exclude_fields=&html_description=0&yandex_cpa=&process_presence_sure=&languages=ru&group_ids=";
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
