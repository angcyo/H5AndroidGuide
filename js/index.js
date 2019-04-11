ProgressBar.show()

const BASE_URL = 'http://www.angcyo.com:9898'
var count = 0

fill.loading('.jcodecraeer')
http.get(`${BASE_URL}/jcodecraeer`, {
    onData: (data) => {
        fill.fill(".jcodecraeer", data)

        loadCheck(count++)
    }
});

fill.loading('.angcyo')
http.get(`${BASE_URL}/angcyo`, {
    onData: (data) => {
        fill.fill(".angcyo", data)

        loadCheck(count++)
    }
});

fill.loading('.ithome')
http.get(`${BASE_URL}/ithome`, {
    onData: (data) => {
        fill.fill(".ithome", data)

        loadCheck(count++)
    }
});

fill.loading('.androidweekly')
http.get(`${BASE_URL}/androidweekly`, {
    onData: (data) => {
        fill.fill(".androidweekly", data)

        loadCheck(count++)
    }
});

fill.loading('.wanandroid')
http.get(`${BASE_URL}/wanandroid`, {
    onData: (data) => {
        fill.fill(".wanandroid", data)

        loadCheck(count++)
    }
});

fill.loading('.gityuan')
http.get(`${BASE_URL}/gityuan`, {
    onData: (data) => {
        fill.fill(".gityuan", data)

        loadCheck(count++)
    }
});

function loadCheck(count) {
    let sum = document.querySelectorAll('.card').length

    if (count + 1 >= sum) {
        ProgressBar.hide()
    }
}