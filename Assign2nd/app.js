
let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=92212ae5`

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


function fetchdata() {
    console.log("hello");
}