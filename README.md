# good-button

Webページに設置するGoodボタンのサンプルです。  
[いいねボタンのデモページ](https://good-button.vercel.app/)

下記のリポジトリも合わせて参照ください。

- [いいね数を参照する実装](https://github.com/datsukan/contentful-good-ref-lambda)
- [いいね数をインクリメントする実装](https://github.com/datsukan/contentful-good-increment-lambda)
- [いいね数をデクリメントする実装](https://github.com/datsukan/contentful-good-decrement-lambda)

## Development

### Local server up

```sh
npm i
npm start
```

open `http://localhost:3000/`

## Deploy

```sh
vercel
```

## Settings

APIのURLを差し替える場合は`src/good-button/index.js`の`baseEndpoint`の値を変更してください。
