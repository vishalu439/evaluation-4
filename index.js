// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", jobSubmit);
var jobArr = JSON.parse(localStorage.getItem("schedule")) || [];

function jobSubmit() {
  event.preventDefault();

  

  var jobObj = {
    matchno: document.querySelector("#matchNum").value,
    teama: masaiForm.teamA.value,
    teamb: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue:masaiForm.venue.value
  };
  jobArr.push(jobObj);
  console.log(jobArr);
  localStorage.setItem("schedule", JSON.stringify(jobArr));
  
  window.location.href = "matches.html";
}