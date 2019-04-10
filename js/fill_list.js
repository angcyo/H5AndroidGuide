!(function () {
    var fill = {
        fill: function (element, data) {
            if (element && data) {
                var rootDiv = document.querySelector(element)

                //先移除 loading
                remove(rootDiv, ".card_loading")

                //填充
                var ul = append(rootDiv, "ul")

                data.forEach((item) => {
                    console.log(item)

                    var card_content = append(append(ul, "li"), "div", "card_content")
                    append(card_content, "h4", "title", item.title)
                    append(card_content, "article", "des", item.des)
                    var card_info = append(card_content, "div", "card_info")
                    append(card_info, "i", "space")
                    append(card_info, "span", ["icon", "icon-see"], " " + item.see)
                    append(card_info, "span", ["icon", "icon-time"], " " + item.time)
                })
            }

        }
    }

    function append(parent, child, cls, text) {
        var e = document.createElement(child)
        parent.appendChild(e)

        if (cls) {

            if (cls instanceof Array) {
                cls.forEach((item) => {
                    e.classList.add(item)
                })
            } else {
                e.classList.add(cls)
            }
        }

        if (text) {
            e.appendChild(document.createTextNode(text))
        }

        return e
    }

    function hide(e, q) {
        var t = e.querySelector(q)
        if (t != undefined) {
            t.style.display = "none"
        }
    }

    function remove(e, q) {
        var tList = e.querySelectorAll(q)
        if (tList) {
            tList.forEach((item) => {
                item.remove()
            })
        }
    }

    this.fill = fill
}());