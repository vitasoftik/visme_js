Тестовое задание для visme.co.

Написано на Codceptjs паттерн Page Object.
Подробнее:
https://codecept.io/
https://codecept.io/pageobjects/

Команда запуска из корневой директории проекта в консоли/терминале:
npm run codeceptjs

Перед запуском убедиться, что установлен nodeJS и npm последних версий.
В корневой директории проекта выполнить `npm i` для установки необходимых пакетов.

Итоговая реализация проекта может выглядить так:
1. Проект в git_e. Pipeline_ы тригерят запуски по расписанию или вручную при сиюминутной необходимости
2. Тесты запускаются в docker_e с selenoid
3. Для снижения времени прогона многопоточность настраивается через ggr, также ggr позволяет отслеживать прохождение тестов в реальном времени
4. Отчеты Allure на почту и/или мессенджеры telegram, discord