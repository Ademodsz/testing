// Menangani klik produk dan menampilkan formulir
const selectButtons = document.querySelectorAll('.select-btn');
const paymentForm = document.querySelector('.payment-form');
let selectedProduct = {};

selectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        selectedProduct.name = product.getAttribute('data-name');
        selectedProduct.price = product.getAttribute('data-price');
        
        paymentForm.style.display = 'block';
    });
});

// Mengirim data setelah pembayaran
document.getElementById('form-pembeli').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    if (name && selectedProduct.name) {
        const message = `Pembelian: ${selectedProduct.name}\nHarga: Rp ${selectedProduct.price}\nNama Pembeli: ${name}`;
        const phoneNumber = '6282182133536'; // Ganti dengan nomor WhatsApp owner
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Silakan isi nama dan pilih produk');
    }
});
