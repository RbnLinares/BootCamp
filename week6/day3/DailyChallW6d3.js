class Video {
    constructor(title, uploader, time) {
       this.title = title;
       this.uploader = uploader;
       this.time = time;
    }
   
    watch() {
       console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
   }
const video1 = new Video('The Matrix', 'Warner Brother', 120);

video1.watch();

const video2 = new Video('Jurasic Park', 'Universal', 110);

video2.watch();

const movieData = [
    { title: 'The Godfather', uploader: 'Paramount Pictures', time: 175 },
    { title: 'The Shawshank Redemption', uploader: 'Warner Bros.', time: 142 },
    { title: 'Pulp Fiction', uploader: 'Miramax', time: 154 },
    { title: 'The Dark Knight', uploader: 'Warner Bros.', time: 152 },
    { title: 'Inception', uploader: 'Warner Bros.', time: 148 }
   ];
   
   movieData.forEach(data => {
    const movie = new Video(data.title, data.uploader, data.time);
    movie.watch();
   });
   
   