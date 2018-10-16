# 🔧 WRRench
WRRench - webpack - react and other awesome libs for development with it

## Установка/Installation -
`yarn install npm install `

## Использование
В папке webpack есть модули(лоадеры) для работы со стилями, файлами и т.д.

Для использования модулей необходимо импортировать их в `webpack.config.js`.

Некоторые модули не нужны в прод или дев режиме.

Вам нужно определить в каком из режимов использовать модули.


## Пример
```javascript 
const fonts = require('./webpack/fonts');

const images = require('./webpack/images')';

const common = merge([
  {
    ... // общие параметры конфига
    fonts(),
    images(),
  }
])
```
