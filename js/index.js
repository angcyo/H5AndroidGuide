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