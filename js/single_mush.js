const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

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
  console.log(items);

  document.querySelector("img").src = items.image;
}
