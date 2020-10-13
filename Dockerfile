FROM ubuntu:latest

COPY . /app
WORKDIR /app

RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install --yes nodejs

RUN npm install
EXPOSE 3002
CMD ["node", "server"]

