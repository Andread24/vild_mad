///project url:
//https://lhzhpvvlomyswblehybb.supabase.co

///API nøgle:
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoemhwdnZsb215c3dibGVoeWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MzIzOTgsImV4cCI6MjAyMzQwODM5OH0.t2Pxr9GZCPjNkKkI0Gg11I9Dyxb6VL50DMZmHE44Ma4
fetch("https://lhzhpvvlomyswblehybb.supabase.co/rest/v1/mushrooms", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoemhwdnZsb215c3dibGVoeWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MzIzOTgsImV4cCI6MjAyMzQwODM5OH0.t2Pxr9GZCPjNkKkI0Gg11I9Dyxb6VL50DMZmHE44Ma4",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(items) {
  // looper og kalder showProduct
  items.forEach(showProduct);
}

function showProduct(items) {
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indholds
  copy.querySelector("h2").textContent = items.title;
  copy.querySelector("img").src = items.image;
  copy.querySelector("#seasons").textContent = items.season;
  copy.querySelector("#landscape").textContent = items.landscape;

  //ændre link så det henter id for det produkt som trykkes på
  copy.querySelector("a").href = `m_singleview.html?id=${items.id}`;

  // appende
  document.querySelector(".grid_produktliste").appendChild(copy);
}
