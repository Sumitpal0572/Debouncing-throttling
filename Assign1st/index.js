

let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=92212ae5`
let input1 = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    throttle(fetchdata, 2000)
})

let flag = false
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

async function fetchdata() {
    console.log("fetch the data");
    // let inputval = input1.value
    let res = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=92212ae5`)
    let data = await res.json();
    console.log(data);
    displaydata(data.Search)
}

let container = document.getElementById("container")

function displaydata(data) {
    container.innerHTML = ""
    data.forEach((ele) => {

        let title = document.createElement("h2")
        title.textContent = ele.Title

        container.append(title)
    })
}
