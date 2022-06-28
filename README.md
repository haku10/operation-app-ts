# operation-app-ts
React typescript

# ReactAPPの起動
`cd operation-app-ts`
で対象プロジェクトまで移動

`docker-compose build`
`docker-compose up`
でDocker上で起動する
※ ビルド前にnode_modulesは削除しておく

##　※外側にnode_modulesを作成したい場合
`docker run --rm -v $PWD:/myapp -w /app node:latest npm install`

### ローカルでエラーが表示される場合
`yarn install `
でnode_modulesにライブラリを取得する
