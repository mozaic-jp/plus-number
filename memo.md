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


github Ci/CD もできるようにする

workflow 内に作成するymlの参考:
https://qiita.com/Re_F/items/25ce618c64804ce31a2c


githubActionsは、containerの作成に失敗する


npm testをローカルで実行はできるようになった

frontendのテスト
'''
    cd plus-number 
    npm test
'''

backendのテスト
'''
    cd plus-number/backend
    npm test
'''
