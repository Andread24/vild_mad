//henter og identificerer ID for det produkt der klikkes på og definerer to konstanter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//henter data for det korrekte id
fetch(`https://lhzhpvvlomyswblehybb.supabase.co/rest/v1/mushrooms?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoemhwdnZsb215c3dibGVoeWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MzIzOTgsImV4cCI6MjAyMzQwODM5OH0.t2Pxr9GZCPjNkKkI0Gg11I9Dyxb6VL50DMZmHE44Ma4",
  },
})
  .then((res) => res.json())
  .then(showProduct);

function showProduct(items) {
  console.log(items);

  //gør så dataen ikke kommer som et array
  const singleProduct = items[0];

  //udfyld indhold med den rigtige data
  document.querySelector("h1").textContent = singleProduct.title;
  document.querySelector(".mushroom_img").src = singleProduct.image;
  document.querySelector(".ingredients").textContent = singleProduct.description;
  document.querySelector(".instruction").textContent = singleProduct.foraging;
  document.querySelector(".mouth").textContent = singleProduct.mouth;
  document.querySelector(".tips").textContent = singleProduct.nose;
}
