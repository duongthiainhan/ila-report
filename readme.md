# GUIDELINE DELELOPMENT A SIMPLE SITE

### Refferal Link
[Nodejs Express Pug](https://github.com/joergkrause/NodejsExpressPug-Book)

**Problems with NPM**

It’s possible that npm can’t access the Internet the way you expect it. This can be because of missing SSL 
support or local proxy servers.

**Setup Proxy**

```js
npm config set proxy http://proxy.company.com:8080 -g
npm config set https-proxy http://proxy.company.com:8080 -g
// escape some special character
npm config set proxy http://domain%5Cuser:pass@host:port
// ” -> %22
// @ -> %40
// : -> %3A
// \ -> %5C
```

**Setup SSL**

npm config set strict-ssl false
npm config set registry "http://registry.npmjs.org/"

```js
npm --proxy http://<user>:<pwd>@<proxy>:<port>
    --without-ssl
    --insecure
    -g install <paketname>
```

**Problems with Git**

```js
// linux, mac
sudo apt-get install git

// window
https://git-scm.com/download/win


// proxy
git config
    --global
    http.proxy
    http://<proxyuser>:<proxypwd>@<proxy.server.com>:<port>

// Git protocols
git config
    --global
    url."https://<username>@".insteadOf git://


```

**Fix npm audit vulnerabilities**

[Fix Vulnerabilities](https://hackernoon.com/how-fix-security-vulnerabilities-in-npm-dependencies-in-3-minutes-rq9g3y7u)

```js
npm update
npm audit

// add script
"scripts": {
    "preinstall": "npx npm-force-resolutions"
},

// add latest version
"resolutions": {
    "minimist": "^1.2.8",
    "glob-parent": "^6.0.2",
    "chokidar": "^3.5.3",
    "glob-watcher": "^5.0.5",
    "glob-stream": "^7.0.0",
    "vinyl-fs": "^3.0.3",
    "gulp": "^4.0.2"
},

// reinsstall
npm install

// check if dependency works correctly
npm ls minimist
```

**Command Line**

```js
// install package
npm install

// view change
gulp watch

// start server on port 8000
npm run dev

// start app on port 3000
npm run ui
```
