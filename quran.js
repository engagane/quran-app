document.addEventListener("DOMContentLoaded", () => {
  const translation_key = "somali_yacob";
  const translation = document.querySelector("#transaltion");
  //Get Sura number from translation local
  let apiResponse = localStorage.getItem("apiResponse");

  //send Api using axios

  let url = `https://quranenc.com/api/v1/translation/sura/${translation_key}/${apiResponse}`;
  axios.get(url).then((response) => {
    const res = response.data.result;
    console.log(res);
    res.map((eachAya) => {
      translation.innerHTML += `
       <div class="quran_container">
       <div class="aya">${eachAya.aya}</div>
       <p class="ayaArabic">${eachAya.arabic_text}</p>
       <p class="ayaSomali">${eachAya.translation}</p>
       </div>

        `;
    });
  });
});
