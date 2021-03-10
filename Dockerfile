FROM node:latest
WORKDIR /opereation-app-ts

ADD . /opereation-app-ts
COPY package.json /opereation-app-ts/package.json
COPY yarn.lock /opereation-app-ts/yarn.lock

# reactに必要なパッケージを追加する
RUN yarn add react-router-dom @types/react @types/react-dom
RUN yarn install
# ビルド実行
RUN yarn build

CMD [ "yarn", "start" ]
