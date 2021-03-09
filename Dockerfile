FROM node:latest
WORKDIR /opereation-app-ts

ADD . /opereation-app-ts

# reactに必要なパッケージを追加する
RUN yarn add react-router-dom
RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
