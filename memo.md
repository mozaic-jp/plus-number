足し算を行うアプリをreact(フロントエンド)とnode.js（バックエンド）で作成したもの
dockerで起動できるように作成してある

起動方法

1. ubuntuを起動。(powershell)

``` powershell
    wsl -d ubuntu
```

2. Docker For Desktopを起動

3. dockerにて、アプリを起動
``` powershell:powershell
    cd plus-number
    docker-compose up --build  
```

停止方法
```
    docker-compose stop
```

