# JohnnieXDU.github.io - Home :house_with_garden:



Welcome to visit Yang's website, [click here](https://johnniexdu.github.io/). 

It has a *~~super-cool~~* **nobody-can-remember** URL address ([https://johnniexdu.github.io/](https://johnniexdu.github.io/)) :cry: 



## Set up and Compile :gear:

For windows:

- node.js (v10.22.0)
- npm (v6.14.6)
- MSVC 2017 v15.0 (MSVC 2019 should also be ok)



```shell
>> cd <project dir>
>> npm clean cache --force
>> npm install
```



## Dev :scroll:

```shell
>> cd <project dir>
>> npm run watch
```

While developing, any changes in `index.html` \ `./scss/style.scss`  \  `./js/scripts.js` will be watched.



you may get the output: 

```shell
...
[16:53:43] Starting server...
[16:53:43] Server started http://localhost:8080 
[16:53:43] LiveReload started on port 35729
[16:53:43] Running server 
...
```

Open `http://localhost:8080` in browser for real-time loading.



## Thanks 

Thanks Ryan Fitzgerald for sharing the source code [template](https://github.com/RyanFitzgerald/devportfolio).

Besides, some new parts are added.



#### new parts

- update `gulpfile.js` for automatic web reloading
- update `gulpfile.js` for watching `*.html`
- add `fancy-log` package for log print
- add `gulp-connect` package for webserver reloading
- update `package.json`
- update `/js/script.js` for animation



## Contact :heartpulse:

:email: yjiao.xdu@gmail.com (GMail)

Very welcome to contact me!



## License

Completely free (MIT)!

See [LICENSE.md](LICENSE.md) for more.
