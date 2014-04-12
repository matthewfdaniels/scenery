/**
 * Created by Thomas on 4/12/2014.
 */
function Sight(image, location, difficulty, popularity, title, notes) {
    this.image = image;
    this.location = location;
    this.difficulty = difficulty;
    this.popularity = popularity;
    this.title = title;
    this.notes = notes;
}

function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

var dataSet = [new Sight("http://upload.wikimedia.org/wikipedia/en/thumb/8/89/Angel_Oak_Tree_in_SC.jpg/1280px-Angel_Oak_Tree_in_SC.jpg",
    Location(-44, 55.2), 3, 44, "Angel Oak", "so underwhelming!"), new Sight("http://www.charlestoncitypaper.com/imager/bull-island/b/original/1884233/9b29/IMG_0769.JPG",
    Location(25, -33), 1, 22, "Bulls Island", "Pretty dead trees huh?"), new Sight("http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hunting_Island_2.jpg/300px-Hunting_Island_2.jpg",
    Location(33, 33), 2, 3, "The Marsh", "Watch out for the skeeters!")];
