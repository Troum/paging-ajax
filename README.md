# Paging Ajax

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

В данном репозитории необходимо указать верную настройку для ```VUE_APP_API_URL```, находящуюся в файле ```.env``` для локального сервера и ```.env.production``` -- если вдруг будете через реальный хост использовать API. Настройкой будет указание URL-хоста, на котором будет развернуто API в виде: http://example.com/api | https://example.com/api, или же, в случае локального использования **Valet** (см. README.md для API) -- http://api-paging-ajax.test (если репозиторий с API не переименован или http://<новое_имя_репозитория>.test -- если переименован)

