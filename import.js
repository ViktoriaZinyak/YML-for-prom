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
const parseString = require("xml2js").parseString;
const axios = require("axios");
const xml2js = require("xml2js");
const yaml = require("js-yaml");
const fs = require("fs");
const { exec } = require("child_process");

const xmlUrl =
  "https://cartelua.com.ua/products_feed.xml?hash_tag=db3a2b8bfd147844306962b72205a768&sales_notes=&product_ids=1881242378%2C1881191994%2C1879803042%2C1879782690&label_ids=&exclude_fields=&html_description=0&yandex_cpa=&process_presence_sure=&languages=ru&group_ids=";

const builder = new xml2js.Builder();

// Функция для выполнения вашего кода
function runScript() {
  axios
    .get(xmlUrl)
    .then(function (response) {
      const xmlData = response.data;

      parseString(xmlData, function (err, result) {
        if (err) {
          console.error(err);
        } else {
          // Распечатываем полученный объект
          result.yml_catalog.shop[0].offers[0].offer[0].price[0] = "100";

          const xmlString = builder.buildObject(result);

          const filePath = "./file.xml";
          fs.writeFile(filePath, xmlString, (err) => {
            if (err) {
              console.error("Ошибка при сохранении YML-строки:", err);
            } else {
              console.log(
                result.yml_catalog.shop[0].offers[0].offer[0].price[0]
              );
              console.log("YML-строка успешно сохранена в файл:", filePath);

              // Выполняем команды git для добавления, фиксации и пуша изменений
              const gitCommands = [
                "git add .",
                'git commit -m "Автоматический коммит"',
                "git push",
              ];

              // Запускаем команды git
              gitCommands.forEach((command) => {
                exec(command, (error, stdout, stderr) => {
                  if (error) {
                    console.error(
                      `Ошибка выполнения команды: ${error.message}`
                    );
                    return;
                  }
                  if (stderr) {
                    console.error(`Ошибка в выводе команды: ${stderr}`);
                    return;
                  }

                  console.log(`Результат выполнения команды: ${stdout}`);
                });
              });
            }
          });
        }
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Запуск функции каждые 10 секунд
setInterval(runScript, 10 * 1000);
// 4 * 60 * 60 * 1000;
