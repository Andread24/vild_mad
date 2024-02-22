//henter og identificerer ID for det produkt der klikkes på og definerer to konstanter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//henter data for det korrekte id
fetch(`https://lhzhpvvlomyswblehybb.supabase.co/rest/v1/recipes?id=eq.${id}`, {
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
  document.querySelector(".rec_billede").src = singleProduct.image;
  document.querySelector(".instruction_1").textContent = singleProduct.directions[0];
  document.querySelector(".instruction_2").textContent = singleProduct.directions[1];
  document.querySelector(".instruction_3").textContent = singleProduct.directions[2];
  document.querySelector(".instruction_4").textContent = singleProduct.directions[3];
  document.querySelector(".instruction_5").textContent = singleProduct.directions[4];
  document.querySelector(".instruction_6").textContent = singleProduct.directions[5];
  document.querySelector(".instruction_7").textContent = singleProduct.directions[6];
  document.querySelector(".instruction_8").textContent = singleProduct.directions[7];
  document.querySelector(".instruction_9").textContent = singleProduct.directions[8];
  document.querySelector(".instruction_10").textContent = singleProduct.directions[9];
  document.querySelector(".tips").textContent = singleProduct.tips;
  document.querySelector(".ingredients_1").textContent = singleProduct.ingrediens[0];
  document.querySelector(".ingredients_2").textContent = singleProduct.ingrediens[1];
  document.querySelector(".ingredients_3").textContent = singleProduct.ingrediens[2];
  document.querySelector(".ingredients_4").textContent = singleProduct.ingrediens[3];
  document.querySelector(".ingredients_5").textContent = singleProduct.ingrediens[4];
  document.querySelector(".ingredients_6").textContent = singleProduct.ingrediens[5];
  document.querySelector(".ingredients_7").textContent = singleProduct.ingrediens[6];
  document.querySelector(".ingredients_8").textContent = singleProduct.ingrediens[7];
  document.querySelector(".mush_billede").src = singleProduct.mushroom_image;
}
