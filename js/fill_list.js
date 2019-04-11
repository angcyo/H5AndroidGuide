!(function () {
    var fill = {
        fill: function (element, data) {
            if (element && data) {
                var rootDiv = document.querySelector(element)
                //先移除 loading
                removeNotFirst(rootDiv)

                //填充
                var ul = append(rootDiv, "ul")

                var list = []
                if (data instanceof Array) {
                    list = data
                } else {
                    list = JSON.parse(data)
                }

                list.forEach((item) => {
                    //console.log(item)

                    var card_content = append(append(ul, "li"), "div", "card_content")
                    append(card_content, "h4", "title", item.title)
                    append(card_content, "article", "des", item.des)
                    var card_info = append(card_content, "div", "card_info")
                    append(card_info, "i", "space")
                    append(card_info, "span", 'icon', ` ${item.user}`)
                    append(card_info, "span", ["icon", "icon-see"], " " + item.see)
                    append(card_info, "span", ["icon", "icon-time"], " " + item.time)

                    card_content.addEventListener("click", () => {
                        open(item.link)
                    })
                })
            }

        },
        loading: function (element) {
            if (element) {

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

    // 移除满足条件的所有子元素
    function remove(e, q) {
        var tList = e.querySelectorAll(q)
        if (tList) {
            tList.forEach((item) => {
                item.remove()
            })
        }
    }

    //移除非第一个子元素的所有元素
    function removeNotFirst(e) {
        let childs = e.childNodes
        console.log(childs.length)
        for (i = childs.length - 1; i > 1; i--) {
            childs[i].remove()
        }
    }

    this.fill = fill
}());