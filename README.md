# Description

Simple reproduction of [React Hook error](https://github.com/facebook/react/issues/13991)

# To Reproduce

```sh
git clone https://github.com/onlyanegg/test-proj
cd test-proj/test-lib
npm install
cd ../test-app
npm install
npm link ../test-lib
```

## In one terminal

```sh
cd test-proj/test-lib
npm run build
```

## In another terminal

```sh
cd test-proj/test-app
npm start
```
