// Lấy dữ liệu từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');   // Lấy ID sản phẩm
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');

// Hiển thị thông tin sản phẩm
// Hiển thị ID sản phẩm
document.getElementById('product-id').innerText = productId;
document.getElementById('product-name').innerText = productName;
document.getElementById('product-price').innerText = productPrice;
document.getElementById('product-image').src = productImage;

// Xử lý sự kiện khi người dùng click "Xác nhận mua hàng"
document.getElementById('confirm-order').addEventListener('click', function() {
    alert(`Đơn hàng: ${productName} đã được xác nhận. Cảm ơn bạn!`);
    window.location.href = `/home.html`;
    // Có thể thêm logic xử lý đơn hàng tại đây
});
