
1.
class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("billa","Zee studios", "rt-14");
console.log(movieDetails);
////////////////////////////////////////////////////////////////////////////////////////////

2.
  class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Thunivu","Zee studios");
console.log(movie1);

const movie2 = new movies("Thunivu","Zee studios","PG-14");
console.log(movie2);
////////////////////////////////////////////////////////////////////////////////////////////////////

3. class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
console.log(movieArray); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
4.
class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);
