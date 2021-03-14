FROM node:latest

RUN apt-get update -y

# イメージに必要なパッケージを使用する
RUN apt-get install -y vim

WORKDIR /opereation-app-ts

ADD . /opereation-app-ts
COPY package.json /opereation-app-ts/package.json
COPY yarn.lock /opereation-app-ts/yarn.lock

# reactに必要なパッケージを追加する
RUN yarn add react-router-dom @types/react @types/react-dom @material-ui/core
RUN yarn install
# ビルド実行
RUN yarn build

CMD [ "yarn", "start" ]
