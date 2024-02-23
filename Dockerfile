From node:alpine
copy . /index
WORKDIR /index
CMD npm start