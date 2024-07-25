alert("welcome to movie collection app");
let moviesArray = [];

let choice;
//function without parameteres
let view = function () {
  if (moviesArray.length == 0) {
    alert("there are no movies in your collection");
  } else {
let movieCollection = "Movies:\n";
for (let i = 0; i < moviesArray.length; i++) {
  const movie = moviesArray[i];
  movieCollection = movieCollection + `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.releaseYear}, Rating: ${movie.imdb}\n`;
}
alert(movieCollection);
    };
  }
do {
  choice = prompt(
    "1- press 1 to add a movie\n2- press 2 to view a movie\n3- press 3 to delete a movie\n 4- press 4 to exit"
  );
  switch (choice) {
    case "1":
      // alert(hello i m case 1)
      addMovie = true;
      while (addMovie) {
        let movieName = prompt("enter movie name:");
        let directorName = prompt("enter director name:");
        let yearRelease = prompt("enter release date:");
        let imdbRating = prompt("how much would you rate this movie:");
        const movies = {
          title: movieName,
          director: directorName,
          releaseYear: yearRelease,
          imdb: imdbRating,
        };
        moviesArray.push(movies);
        addMovie = prompt("if you wanna add more movies enter 'yes'");
        if (addMovie == "yes" || addMovie == "Yes") {
          addMovie = true;
        } else {
          addMovie = false;
        }
      }
      break;
    case "2":
      // alert("hello i m case 2")
      view();
      break;
    case "3":
      if (moviesArray.length > 0) {
        // alert("hello i m case 3")
        alert(moviesArray.length);
        let index;
        if(moviesArray.length>1){
        alert(
          "we have " + moviesArray.length + " movies"
        );
      }
      else{
        alert(
          "we have " + moviesArray.length + " movie"
        );
      }
        view();
        index = prompt("Which index do you wanna delete the movie from?");
        index = index - 1;
        let dltCount = prompt("how many movies do you want to delete");
        moviesArray.splice(index, dltCount);
        alert("movies has been deleted from your collection");
      } else {
        alert("you do not have movies in your collection");
      }
      break;
    case "4":
      // alert("hello i m case 4 (exit)")
      break;
  }
} while (choice != 4 && choice != null);
