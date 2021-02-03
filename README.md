# covid-app

## 라이브서버이슈

    1. netlify 배포시 cors 문제로 데이터를 제대로 못불러옴
    2. jsonp로 시도를 생각해봤으나 cors 정책 및 보안문제 이슈가 있으므로 성공해도 실무적용불가로 drop
    3. 결국 서버측에서 allow 해줘야 한다고 생각함
    4. vue.config.js 에서 프록시 활용으로 로컬에선 테스트가능
    5. proxy 서버를 설치하면 해결될거같으나 백엔드쪽은 지식이 없으며 백엔드 서버까지 두게된다면 일이 매우 커짐
    6. 해결방법을 찾으면 다시 업데이트 하는쪽으로 생각중

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
