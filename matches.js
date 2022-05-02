// write js code here corresponding to matches.html
var jobArr = JSON.parse(localStorage.getItem("schedule"));
    displayData(jobArr);

    function handleFilter() {
      var selected = document.getElementById("filterVenue").value;
      
      var filteredList = jobArr.filter(function (elem) {
        return elem.venue == selected;
      });
      
      displayData(filteredList);
    }

   

    var bookMarkArr = JSON.parse(localStorage.getItem("favourites")) || [];

    function displayData(data) {
      document.querySelector("tbody").innerHTML = "";
      data.forEach(function (elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchno;

        var td2 = document.createElement("td");
        td2.innerText = elem.teama;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamb;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;

        var td6 = document.createElement("td");
        td6.innerText = elem.venue;

        var td5 = document.createElement("td");
        td5.innerText = "favourites";
        td5.style.color = "blue";
        td5.style.cursor = "pointer";
        td5.addEventListener("click", function () {
          
          bookMarkFun(elem);
        });

        tr.append(td1, td2, td3, td4,td6, td5);

        document.querySelector("tbody").append(tr);
      });
    }

    function bookMarkFun(elem) {
      
      bookMarkArr.push(elem);
      localStorage.setItem("favourites", JSON.stringify(bookMarkArr));
    }