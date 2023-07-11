FROM node:lts-hydrogen

WORKDIR /opt/test-app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]