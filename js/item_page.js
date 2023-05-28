function increaseValue() {
    var value = parseInt(document.getElementById('qty-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value > 998 ? value = 998 : '';
    value++;
    document.getElementById('qty-number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('qty-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('qty-number').value = value;
  }

  document.getElementById("decrease-button").addEventListener("click", (e) => {
    decreaseValue();
  });

  document.getElementById("increase-button").addEventListener("click", (e) => {
    increaseValue();
  });