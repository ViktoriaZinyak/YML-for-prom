const cron = require("node-cron");
const { exec } = require("child_process");
console.log(cron.schedule);

// Расписание выполнения каждые 4 часа
cron.schedule("0 */4 * * *", () => {
  // Команда для запуска скрипта
  console.log("2");
  const command =
    'node import.js && git add . && git commit -m "Автоматический коммит1" && git push';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка выполнения команды: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Ошибка в выводе команды: ${stderr}`);
      return;
    }

    console.log(`Результат выполнения команды: ${stdout}`);
  });
});
