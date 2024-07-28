
let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=92212ae5`

let search = document.getElementById("search")
search.addEventListener("input", function () {
    fetchdata()
});

function fetchdata() {
    console.log("hello");
}