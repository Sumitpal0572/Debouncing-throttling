
let url = `http://www.omdbapi.com/?i=tt3896198&apikey=ad9cf180`

let search = document.getElementById("search")
search.addEventListener("input", function () {
    debounce(fetchdata, 1000)
});

let id;
function debounce(func, delay) {
    if (id) {
        clearTimeout(id)
    }

    id = setTimeout(() => {
        func()
    }, delay)
}


async function fetchdata() {
    console.log("hello");
    let inputval = search.value

    let res = await fetch(`${url}&s=${inputval}`)
    let data = await res.json()
    console.log(data);
}