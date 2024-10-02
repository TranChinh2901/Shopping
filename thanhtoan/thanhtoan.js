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
const productName = urlParams.get('name');
const productPrice = parseFloat(urlParams.get('price'));  // Chuyển đổi sang kiểu số
const productImage = urlParams.get('image');

// Hiển thị thông tin sản phẩm
document.getElementById('product-name').innerText = productName;
document.getElementById('product-price').innerText = productPrice.toLocaleString();  // Định dạng tiền tệ
document.getElementById('product-image').src = productImage;

// Cập nhật giá tổng ban đầu
let quantity = 1;
let totalPrice = productPrice * quantity;
document.getElementById('total-price').innerText = totalPrice.toLocaleString();

// Xử lý sự kiện khi tăng/giảm số lượng
document.getElementById('increase-quantity').addEventListener('click', function() {
    quantity++;
    document.getElementById('product-quantity').value = quantity;
    updateTotalPrice();
});

document.getElementById('decrease-quantity').addEventListener('click', function() {
    if (quantity > 1) {  // Đảm bảo số lượng không thấp hơn 1
        quantity--;
        document.getElementById('product-quantity').value = quantity;
        updateTotalPrice();
    }
});

// Cập nhật tổng giá dựa trên số lượng sản phẩm
function updateTotalPrice() {
    totalPrice = productPrice * quantity;
    document.getElementById('total-price').innerText = totalPrice.toLocaleString();  // Định dạng tiền tệ
}

// Xử lý sự kiện khi người dùng click "Xác nhận mua hàng"
document.getElementById('confirm-order').addEventListener('click', function() {
    const userConfirmed = confirm(`Bạn có chắc chắn muốn xác nhận đơn hàng: ${productName} với số lượng ${quantity}?`);
    if (userConfirmed) {
        alert(`Đơn hàng: ${productName} đã được xác nhận với số lượng ${quantity}. Tổng giá: ${totalPrice.toLocaleString()} VND. Cảm ơn bạn!`);
        window.location.href = `/home.html`; // Chuyển hướng đến trang home.html
    }
});

// Xử lý sự kiện khi người dùng click "Hủy"
document.getElementById('cancel-order').addEventListener('click', function() {
    const userCanceled = confirm(`Bạn có chắc chắn muốn hủy đơn hàng: ${productName} ?`);
    if (userCanceled) {
        window.location.href = '/home.html'; // Quay lại trang home.html
    }
});
