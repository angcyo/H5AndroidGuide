!(function () {
    var anim = {
        opacity: function (e, from, to, delay = 0, speed = 0.1) {
            e.style.opacity = from
            e.timeOutOpacity && clearTimeout(e.timeOutOpacity)
            e.timeIntervalOpacity && clearInterval(e.timeIntervalOpacity)

            e.timeOutOpacity = setTimeout(() => {
                var value = from
                e.timeIntervalOpacity = setInterval(() => {
                    if (value >= to) {
                        e.style.opacity = to
                        clearInterval(e.timeIntervalOpacity)
                    } else {
                        value += speed

                        e.style.opacity = value
                    }
                }, 16)
            }, delay)
        },
        marginTop: function (e, from, to, delay = 0, speed = 1) {
            e.style.marginTop = from
            e.timeOutMarginTop && clearTimeout(e.timeOutMarginTop)
            e.timeIntervalMarginTop && clearInterval(e.timeIntervalMarginTop)

            e.timeOut = setTimeout(() => {
                var value = from
                e.timeIntervalMarginTop = setInterval(() => {
                    if (value >= to) {
                        e.style.marginTop = to
                        clearInterval(e.timeIntervalMarginTop)
                    } else {
                        value += speed

                        e.style.marginTop = value + 'px'
                    }
                }, 16)
            }, delay)
        }
    }
    this.anim = anim;
}());