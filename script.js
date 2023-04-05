
console.log("hello");

let defaulteveryweektutor = 4;
let defaulteveryweekpractice = 12;

//load function on window load

window.onload = loadDefaults();

function loadDefaults() {
    console.log("loadDefaults reached");
    let maintitletext = "Estimate how long it takes to become developer";
    let headerstring = "Ideal recommendations";
    let idealnumberofhours = 4;
    let idealnumberofhourspractice = 12;
    //string with idealnumberofhours and idealnumberofhourspractice
    let idealnumberofhoursstring = idealnumberofhours + " hours per week of tutoring and " + idealnumberofhourspractice + " hours per week of practice";
    //get maintitle
    let maintitle = document.getElementById("maintitle");
    maintitle.innerHTML = maintitletext;
    //get idealnumberofhoursstringptag
    let idealnumberofhoursstringptag = document.getElementById("idealnumberofhoursstringptag");
    idealnumberofhoursstringptag.innerHTML = idealnumberofhoursstring;
    //get idealnumberofhourstitle
    let idealnumberofhourstitle = document.getElementById("idealnumberofhourstitle");
    idealnumberofhourstitle.innerHTML = headerstring;

    //get explanation 
    let explanation = document.getElementById("explanation");
    explanation.innerHTML = "estimation will come here";

    //get title with id
    let title = document.getElementById("title");
    title.innerHTML = "other info will come here";

    //get image with id
    let image = document.getElementById("image");
    image.src = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseta.jpg";
}

//loadNASAData()

function loadNASAData() {

    console.log("loadNASAData hellojson");

    //before we call, show a loading image

    let loadingimage1 = "https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp";
    let loadingimage2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Conrad_Luperti%2C_J._Marvin_Spoor%2C_and_William_S._Adams_with_their_camera.jpg/1024px-Conrad_Luperti%2C_J._Marvin_Spoor%2C_and_William_S._Adams_with_their_camera.jpg";
    document.getElementById("image").src = loadingimage2;

    //fetch call 

    //we need to provide the NASA API ENDPOINT.

    //JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 

    let apikey = "JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;
    let newurl = "https://bfsdfbackendapril4th2023.vercel.app/hellojson";

    console.log(newurl);

    // fetch(url2). //waits for the api to resolve and returns a response
    //     then(response => response.json())  //convert response to json, wait for conversion to happen
    //     .then(data => { //wait for the data to arrive as json
    //         console.log(data); //do whatever you want with it.           
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //       });  

    fetch(newurl).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        //console.log(json);

        //my current json looks like this.
        // {"message":"Hello World","name":"Monkey","age":20}

        let title = json.message;
        let date = json.name;
        let explanation = json.age;
        let url = "nothing to show right now";
        let media_type = "nothing to show right now";
        //instead of the nasa image, using one of my own images.
        let hdurl = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksetc.jpg";

        console.log(`title: ${title}`);
        console.log(`date: ${date}`);
        console.log(`explanation: ${explanation}`);
        console.log(`url: ${url}`);
        console.log(`media_type: ${media_type}`);
        console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;

        document.getElementById("image").src = hdurl;




    }).catch(function (error) {
        console.log(error);

        errorDisplay(error);

    });



}

function loadreturnestimate() {

    console.log("loadreturnestimate reached");

    //before we call, show a loading image

    let loadingimage2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Conrad_Luperti%2C_J._Marvin_Spoor%2C_and_William_S._Adams_with_their_camera.jpg/1024px-Conrad_Luperti%2C_J._Marvin_Spoor%2C_and_William_S._Adams_with_their_camera.jpg";
    document.getElementById("image").src = loadingimage2;
    let explanation = document.getElementById("explanation");
    explanation.innerHTML = "estimation is loading...";

    //fetch call 
    let newurl = "https://bfsdfbackendapril4th2023.vercel.app/returnestimate";

    console.log(newurl);

    //collect input inputNumbereveryweektutor
    let inputNumbereveryweektutor = document.getElementById("inputNumbereveryweektutor").value || defaulteveryweektutor;
    //collect input inputNumbereveryweekpractice
    let inputNumbereveryweekpractice = document.getElementById("inputNumbereveryweekpractice").value || defaulteveryweekpractice;

    console.log(`inputNumbereveryweektutor: ${inputNumbereveryweektutor}`);
    console.log(`inputNumbereveryweekpractice: ${inputNumbereveryweekpractice}`);

    //object with inputNumbereveryweektutor and inputNumbereveryweekpractice

    let inputobject = {
        "everyweektutor": inputNumbereveryweektutor,
        "everyweekpractice": inputNumbereveryweekpractice
    };

    fetch(newurl, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputobject),
    }
    ).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        console.log(json);

        let explanation = json.simplesummarysentence;

        document.getElementById("explanation").innerHTML = explanation;

        //     //instead of the nasa image, using one of my own images.
        let hdurl = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksetc.jpg";

        document.getElementById("image").src = hdurl;

        document.getElementById("title").innerHTML = "Estimation Loaded";

        //my current json looks like this.
        // {"message":"Hello World","name":"Monkey","age":20}

    }).catch(function (error) {
        console.log(error);

        errorDisplay(error);
    });


}

function errorDisplay() {
    //https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseti.jpg
    let title = "some error. check console or network logs";
    let date = "some error. check console or network logs";
    let explanation = error;
    let url = "nothing to show right now";
    let media_type = "nothing to show right now";
    //instead of the nasa image, using one of my own images.
    let hdurl = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseti.jpg";

    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("explanation").innerHTML = explanation;

    document.getElementById("image").src = hdurl;
}

//function that resets inputNumbereveryweektutor and inputNumbereveryweekpractice
function resetinputNumbereveryweektutor() {
    console.log("resetinputNumbereveryweektutor reached");
    document.getElementById("inputNumbereveryweektutor").value = null;
    document.getElementById("inputNumbereveryweekpractice").value = null;

    //call load defaults
    loadDefaults();
}




