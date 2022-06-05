;(function(d) {
    let $menuButton = d.getElementById("menu")
    let $menu = d.getElementById("menu-list")
    let $close = d.getElementById("close")

    
    $menuButton.addEventListener("click", function (e) {
        $menu.classList.add("open")
    })
    $close.addEventListener("click", function (e) {
        $menu.classList.remove("open")
    })

})(document);