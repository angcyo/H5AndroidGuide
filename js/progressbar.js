!(function () {
    let bar = {
        show: function () {
            let e = document.querySelector('._progressbar')
            if (!e) {
                e = document.createElement('div')
                e.classList.add('_progressbar')

                with(e.style) {
                    width = '0px'
                    height = '3px'
                    position = 'fixed'
                    top = '0px'
                    left = '0px'
                    backgroundColor = "#B94DE7"
                }
                document.body.appendChild(e)

                anim(e)
            }
        },
        hide: function () {
            let e = document.querySelector('._progressbar')
            if (e) {
                clearInterval(e.ProgressBarAnim)
                e.remove()
            }
        },
        showOnce: function () {
            bar.show()
            setTimeout(() => {
                bar.hide()
            }, 1000)
        }
    }

    function anim(elem) {
        let anim_width = 0,
            anim_left = 0,
            anim_value = 0,
            step = 40,
            WINDOW_WIDTH = (window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth),
            MAX_WIDTH = WINDOW_WIDTH / 2

        elem.ProgressBarAnim = setInterval(() => {
            with(elem.style) {
                anim_value += step
                if (anim_value > MAX_WIDTH) {
                    anim_width = MAX_WIDTH
                    anim_left += step

                    if (anim_left > WINDOW_WIDTH) {
                        anim_value = 0
                        anim_width = 0
                    }
                } else {
                    anim_width += step
                    anim_left = 0
                }
                width = anim_width + 'px'
                left = anim_left + 'px'
            }
        }, 16)
    }

    this.ProgressBar = bar
}());