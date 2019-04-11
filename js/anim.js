!(function () {
    var anim = {
        opacity: function (e, from, to, delay = 0, speed = 0.1) {
            e.style.opacity = from
            e.timeOut && clearTimeout(e.timeOut)
            e.timeInterval && clearInterval(e.timeInterval)

            e.timeOut = setTimeout(() => {
                var value = from
                e.timeInterval = setInterval(() => {
                    if (value == to) {
                        clearInterval(e.timeInterval)
                    } else {
                        value += speed

                        e.style.opacity = value
                    }
                }, 16)
            }, delay)
        }
    }
    this.anim = anim;
}());