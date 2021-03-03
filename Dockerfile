FROM node:latest
WORKDIR /opereation-app-ts

ADD . /opereation-app-ts

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
