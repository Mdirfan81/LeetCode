class quiz {
  constructor(questions) {
    this.questions = questions;
  }
}
async function fetchQuestion() {
  let url =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  let responce = await fetch(url);
  let convertJson = await responce.json();
  let pureData = await convertJson;
  return pureData.results;
}

function ques() {
  let url =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  fetch(url)
    .then((jsonData) => jsonData.json())
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
}
getAllQuestion();
async function getAllQuestion() {
  let allData = await fetchQuestion();
  let newData = ques();
  console.warn("===>", newData);
  let data = new quiz(allData);
  // console.warn(allData);
}
