// document.querySelector('.selected-option').addEventListener('click', function () {
//     document.querySelector('.options').classList.toggle('show');
//   });
  
//   document.querySelectorAll('.option').forEach(option => {
//     option.addEventListener('click', function () {
//       const selected = document.querySelector('.selected-option span');
//       selected.textContent = this.textContent;
//       document.querySelector('.options').classList.remove('show');
//     });
//   });


// Đoạn code script xử lý khi click vào màn hình sẽ đóng đăng nhập, đăng kí

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Đoạn script khi cuộn xuống thì thanh top sẽ ẩn và header sẽ lên 
window.onscroll = function () {
    stickyNav();
};

var header = document.getElementById("sticky-header");
var topBar = document.getElementById("top-bar");
var sticky = header.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        topBar.classList.add("hidden");
    } else {
        header.classList.remove("sticky");
        topBar.classList.remove("hidden");
    }
}



// Lấy dữ liệu từ URL
const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('id');   // Nếu bạn cần ID, hãy bỏ comment dòng này
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');

// Hiển thị thông tin sản phẩm
// Hiển thị ID sản phẩm
// document.getElementById('product-id').innerText = productId; // Nếu cần hiển thị ID sản phẩm
document.getElementById('product-name').innerText = productName;
document.getElementById('product-price').innerText = productPrice;
document.getElementById('product-image').src = productImage;

// Xử lý sự kiện khi người dùng click "Xác nhận mua hàng"
document.getElementById('confirm-order').addEventListener('click', function() {
    const userConfirmed = confirm(`Bạn có chắc chắn muốn xác nhận đơn hàng: ${productName}?`);
    if (userConfirmed) {
        alert(`Đơn hàng: ${productName} đã được xác nhận. Cảm ơn bạn!`);
        window.location.href = `/home.html`; // Chuyển hướng đến trang home.html
    }
});

// Xử lý sự kiện khi người dùng click "Hủy"
document.getElementById('cancel-order').addEventListener('click', function() {
    const userCanceled = confirm("Bạn có chắc chắn muốn hủy đơn hàng?");
    if (userCanceled) {
        window.location.href = '/home.html'; // Quay lại trang home.html
    }
});
