const allSuraName = document.querySelector(".sura-list");

//getting all sura form the api
let getSuraName = () => {
  let url = "https://api.alquran.cloud/v1/surah";
  //sending request to
  axios
    .get(url)
    .then((Response) => {
      const data = Response.data.data;
      console.log(data);
      data.map((eachSura) => {
        console.log("eachSura", eachSura);
        let suraNumber = eachSura.number;
        let SuraName = eachSura.name;
        allSuraName.innerHTML += `
            <li onclick=handleClick(this.value) class="sura" value="${suraNumber}">${SuraName}</li>
            `;
      });
    })
    .catch((error) => {
      alert(error);
    });
};
window.addEventListener("load", getSuraName);
let handleClick = (value) => {
  window.location.href = "showsurah.html";
  let SurahNumber = value;
  localStorage.setItem("apiResponse", JSON.stringify(SurahNumber));
};
