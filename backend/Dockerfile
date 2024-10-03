# Node.jsイメージを使用
FROM node:20.11.1

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# パッケージ情報をコピーして、依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションが使用するポートを指定
EXPOSE 5000

# アプリケーションの起動コマンド
CMD ["node", "index.js"]
