 function updateSantigrad() {
            // range değerini al ve number input alanına ata
            document.getElementById("santigrad").value = document.getElementById("skala").value;
        }

function updateSkala() {
            // number değerini al ve range input alanına ata
            document.getElementById("skala").value = document.getElementById("santigrad").value;
 }


function santigradToFahr() {
  document.getElementById("fahrenheit").value = Number(document.getElementById("santigrad").value) * 1.8 + 32;
}


function santigradToKelvin() {
  document.getElementById("kelvin").value = Number(document.getElementById("santigrad").value) + 273.15;
}
