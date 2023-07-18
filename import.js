var parseString = require("xml2js").parseString;
var axios = require("axios");
var xml2js = require("xml2js");
const yaml = require("js-yaml");
const fs = require("fs");
const notAvailable = require("./notAvailable.js");
const goodsNotForUse = require("./goodsNotForUse.js");
const deleteId = require("./deleteId.js");
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
        var products = result.yml_catalog.shop[0].offers[0].offer;
        var newProductList = notAvailable.concat(goodsNotForUse);
        var filteredProducts = products.filter(function (product) {
          return !newProductList.some(function (id) {
            return product["$"].id === id.toString();
          });
        });
        let filteredData = filteredProducts.filter((item) => {
          return !deleteId.some(function (id) {
            return item.vendorCode[0].includes(id);
          });
        });

        let filteredByName = filteredData.filter(function (item) {
          return !item.name[0].includes("кроссовки");
        });

        let filteredByKeyWord = filteredByName.filter(function (item) {
          return !item.name[0].includes("УЦЕНКА!");
        });
        // console.log(filteredData);
        // console.log(result.yml_catalog.shop[0].offers[0].offer);
        result.yml_catalog.shop[0].offers[0].offer = filteredByKeyWord;
        // result.yml_catalog.shop[0] = filteredData;
        // for (var i = 0; i < filteredProducts.length; i++) {
        //   var product = filteredProducts[i];
        //   var unavailableProductIds = "";
        //   if (product.price[0] > 2500) {
        //     var productId = product["$"].id;
        //     console.log(productId);
        //   }
        //   // var available = product["$"].available;

        //   // if (available === "false") {
        //   //   var productId = product["$"].id;
        //   //   unavailableProductIds.push(productId);
        //   // }
        // }
        console.log(result.yml_catalog.shop[0].offers[0].offer[0]);
        const xmlString = builder.buildObject(result);

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
