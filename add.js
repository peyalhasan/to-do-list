const cristion = {
  name: "Cristiano Ronaldo",  
  passion: " Footballer",
  Clubs: {"Real Madrid", "Manchester United", " Juventus", "Sporting Lisbon", " Al Naser"}
                 }
const footballer = (obj) => {
  for(const i in obj){
    return i; 
  }
}

console.log(footballer(Cristiano))
