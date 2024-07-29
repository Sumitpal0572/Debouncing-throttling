

let url = `http://www.omdbapi.com/?i=tt3896198&apikey=ad9cf180`
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
    let inputval = input1.value
    let res = await fetch(`${url}&s=${inputval}`)
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
        title.setAttribute("data-imdbid", ele.imdbID); // Storing IMDb ID in an attribute
        title.addEventListener("click", () => fetchMovieDetails(ele.imdbID)); //arrow func
        container.append(title);
    })
}


async function fetchMovieDetails(imdbID) {
    try {
        let res = await fetch(
            `http://www.omdbapi.com/?i=${imdbID}&apikey=f9f6a9fb`
        );
        let data = await res.json();
        console.log(data);
        displayMovieDetails(data);
    } catch (error) {
        console.log(error);
    }
}

function displayMovieDetails(data) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    let title = document.createElement("h2");
    title.textContent = data.Title;

    let poster = document.createElement("img");
    poster.src = data.Poster;

    let year = document.createElement("p");
    year.textContent = `Year: ${data.Year}`;

    let genre = document.createElement("p");
    genre.textContent = `Genre: ${data.Genre}`;

    let plot = document.createElement("p");
    plot.textContent = `Plot: ${data.Plot}`;
    container.append(poster, title, year, genre, plot);
}