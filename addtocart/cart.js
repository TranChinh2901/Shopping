
const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('id');   
const productName = urlParams.get('name');
const productPrice = urlParams.get('prices');
const productImage = urlParams.get('image');

// Kiểm tra nếu các thông tin sản phẩm tồn tại
if (productId && productName && productPrice && productImage) {
    // Hiển thị ID sản phẩm
    // document.getElementById('product-id').innerText = productId;
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-prices').innerText = productPrice;
    document.getElementById('product-image').src = productImage;
} else {
    // console.error("Không có thông tin sản phẩm.");
    alert("Hiện tại giỏ hàng đang cập nhật, xin vui lòng đợi trong ít phút")
    
}

// Xử lý sự kiện khi người dùng click "Xác nhận mua hàng"
document.getElementById('confirm-order').addEventListener('click', function() {
    alert(`Đơn hàng: ${productName} đã được xác nhận. Cảm ơn bạn!`);
    window.location.href = `/home.html`;
});
