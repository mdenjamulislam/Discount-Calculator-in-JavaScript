// Discount Calculator Script

document.getElementById('calculate').addEventListener('click', function() {
    var originalPrice = document.getElementById('price').value;
    var discountRate = document.getElementById('discount').value;
    var discountAmount = originalPrice * (discountRate / 100);
    var newPrice = originalPrice - discountAmount;
    document.getElementById('result').value = newPrice;
});