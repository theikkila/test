

FROM dockerfile/nodejs

ADD . /data/
RUN npm install
EXPOSE 8080
CMD node app.js
