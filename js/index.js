//console.log("Hello Index.js")


fill.loading('.jcodecraeer')
http.get("http://127.0.0.1:9898/jcodecraeer", {
    onData: (data) => {
        fill.fill(".jcodecraeer", data)
    }
});

fill.loading('.angcyo')
http.get("http://127.0.0.1:9898/angcyo", {
    onData: (data) => {
        fill.fill(".angcyo", data)
    }
});

fill.loading('.ithome')
http.get("http://127.0.0.1:9898/ithome", {
    onData: (data) => {
        fill.fill(".ithome", data)
    }
});

fill.loading('.androidweekly')
http.get("http://127.0.0.1:9898/androidweekly", {
    onData: (data) => {
        fill.fill(".androidweekly", data)
    }
});

fill.loading('.wanandroid')
http.get("http://127.0.0.1:9898/wanandroid", {
    onData: (data) => {
        fill.fill(".wanandroid", data)
    }
});

fill.loading('.gityuan')
http.get("http://127.0.0.1:9898/gityuan", {
    onData: (data) => {
        fill.fill(".gityuan", data)
    }
});