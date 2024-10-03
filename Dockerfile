# Node.jsのビルドステージ
FROM node:20.11.1 as build

# 作業ディレクトリを作成
WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピーしてビルド
COPY . .
RUN npm run build

# Nginxステージ
FROM nginx:alpine

# ビルドされたファイルをnginxのデフォルト公開ディレクトリにコピー
COPY --from=build /app/build /usr/share/nginx/html

# 使用するポートを指定
EXPOSE 80

# Nginxの起動コマンド
CMD ["nginx", "-g", "daemon off;"]
