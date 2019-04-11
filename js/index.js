//console.log("Hello Index.js")

const BASE_URL = 'http://127.0.0.1:9898'

fill.loading('.jcodecraeer')
http.get(`${BASE_URL}/jcodecraeer`, {
    onData: (data) => {
        fill.fill(".jcodecraeer", data)
    }
});

fill.loading('.angcyo')
http.get(`${BASE_URL}/angcyo`, {
    onData: (data) => {
        fill.fill(".angcyo", data)
    }
});

fill.loading('.ithome')
http.get(`${BASE_URL}/ithome`, {
    onData: (data) => {
        fill.fill(".ithome", data)
    }
});

fill.loading('.androidweekly')
http.get(`${BASE_URL}/androidweekly`, {
    onData: (data) => {
        fill.fill(".androidweekly", data)
    }
});

fill.loading('.wanandroid')
http.get(`${BASE_URL}/wanandroid`, {
    onData: (data) => {
        fill.fill(".wanandroid", data)
    }
});

fill.loading('.gityuan')
http.get(`${BASE_URL}/gityuan`, {
    onData: (data) => {
        fill.fill(".gityuan", data)
    }
});