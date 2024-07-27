
let input1 = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    throttle(fetchdata, 2000)
})

let flag = flase
function throttle(func, delay) {
    if (flag) {
        return
    }
    func();
    flag = true;
    setTimeout(() => {
        flag = false
    }, delay)
}