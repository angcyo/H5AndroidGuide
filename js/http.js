!(function () {
    "use strict"

    var global = (function () {
        return this || (0, eval)('this');
    }())

    var http = {
        get: function (url, callback) {
            var request = new XMLHttpRequest()
            request.open("GET", url)
            request.send()

            request.onload = () => {
                callback.onData(request.responseText)
            }

            request.onerror = () => {
                console.log(url + "请求失败.")
            }
        },
        post: function (url, callback) {

        }
    }
    global.http = http
}());