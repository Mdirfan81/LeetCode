class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  personName() {
    return this.name;
  }
  personAge() {
    return this.age;
  }
}

const test = new person("irfan", "25");
let result1 = test.personName();
let result2 = test.personAge();

console.log({ result1, result2 });

class GameMoves {
  constructor(playerName, life, correctAnser, totalQuestion) {
    this.playerName = playerName;
    this.life = life;
    this.correctAnser = correctAnser;
    this.totalQuestion = totalQuestion;
  }
}

start();
async function start() {
  console.log("This is working");
  const totalQuestion ="";
  let myLife =3;
  let  
  const allQuestion = await fetchQuestion();
  if(allQuestion){

  }
}

async function fetchQuestion() {
  let url =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  const responce = await fetch(url);
  let jsonData = await responce.json();
  let data = await jsonData;
  return data.results;
}
