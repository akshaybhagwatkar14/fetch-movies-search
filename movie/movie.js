async function getmovies() {

    try {
        let movie = document.getElementById("search").value;

        let response = await fetch
        (
            `https://www.omdbapi.com/?t=${movie}&apikey=5cfd6243`);

        let data = await response.json();

        search(data)

        console.log("data:", data);

    }
    catch (err) {
        console.log("err", err)
    }

}

function search(data) 
{
    if(data.Title == undefined) 
    {
        
        var output = document.querySelector(".output");
        output.innerHTML=""

        var image = document.createElement("img");
        image.setAttribute("src", "https://media3.giphy.com/media/cccpTlG85cCdEtyybs/giphy.gif?cid=ecf05e47c53lw1xd4lnduru7d9wmq2k56wspndjrfmq6l6pr&rid=giphy.gif&ct=g")
        output.append(image);

    }

    else  {
        
        let movieshow = document.querySelector(".imagedata");
        movieshow.innerHTML = "";

        let image = document.createElement("img");
        image.setAttribute("src", data.Poster);

        let moviedetails = document.querySelector(".moviedetails")
        moviedetails.innerHTML = "";

        let title = document.createElement("h1");
        title.innerText = `Title:-${data.Title}`;

        let imdbrate = document.createElement("h2");
        imdbrate.innerText = `IMDB Rating:-${data.imdbRating}`;

        let Release = document.createElement("h2");
        Release.innerText = `Released:-${data.Released}`;

        let actors = document.createElement("h2");
        actors.innerText = `Actors :-${data.Actors}`

        let writer = document.createElement("h2");
        writer.innerText = `Writer:-${data.Writer}`

        let movetype = document.createElement("h2")
        movetype.innerText = `Time Duration:-${data.Runtime}`

        let plot = document.createElement("p");
        plot.innerText = `Movie Plot:-${data.Plot}`

        let recommended = document.querySelector(".recommended")
        var image1 = document.createElement("div");
        
        recommended.innerHTML = "";

        if (data.imdbRating >= 8.5) 
        {
            recommended.innerHTML = "";

            image1.setAttribute("id", "recommend")

            image1.innerText = "Recommenmded"
        }


        recommended.append(image1)

        movieshow.append(image)
        
        moviedetails.append(title, imdbrate, Release, actors, writer, movetype, plot);
    }
    
}