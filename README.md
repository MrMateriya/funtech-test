# Funtech Test

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)

Funtech Test — это фронтенд-приложение на Next.js с TypeScript и SCSS, созданное для тестового проекта. Приложение использует современный App Router, легко разворачивается как локально, так и через Docker.

## Содержание
- [Технологии](#технологии)
- [Начало работы](#начало-работы)

## Технологии
- [Next.js 15](https://nextjs.org/) - React фреймворк с App Router
- [TypeScript](https://www.typescriptlang.org/) - Статическая типизация
- [SCSS](https://sass-lang.com/) - Препроцессор CSS
- [Docker](https://www.docker.com/) - Контейнеризация приложения
- [ESLint](https://eslint.org/) - Линтинг кода
- [Prettier](https://prettier.io/) - Форматирование кода

## Начало работы

### Предварительные требования
- [Node.js](https://nodejs.org/) 18.17 или выше
- [npm](https://www.npmjs.com/) 9.0 или выше
- [Docker](https://www.docker.com/) (опционально, для контейнеризации)

## Установка
Клонируйте репозиторий и установите зависимости:

```bash
git clone <repository-url>
cd funtech-test
npm install
```

### Настройка переменных окружения
Создайте файл .env в корне проекта:

```bash
NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3/
```

### Запуск в режиме разработки

```bash
npm run dev
```
Приложение будет доступно по адресу: http://localhost:3000

### Production сборка
```bash
npm run build
npm start
```

## Использование с Docker
### Сборка Docker образа
```bash
docker build --build-arg NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3/ -t funtech-test .
```
### Запуск Docker контейнера
```bash
docker run -p 3000:3000 funtech-test
```