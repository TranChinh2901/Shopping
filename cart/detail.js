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
















//lấy dữ liệu từ products.json
let products = null;
fetch('/products.json')
.then(response => response.json())
.then(data => {
    products =data;
    showDetail();
})

//tìm product
function showDetail() {
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId
    })[0];

   
    if(!thisProduct){
        window.location.href = "/";
    }
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.prices').innerText = 'Giá: ' + thisProduct.prices;
    detail.querySelector('.pricesgoc').innerText = 'Giá gốc: ' + thisProduct.pricesgoc;
    detail.querySelector('.describe').innerText = thisProduct.describe;
    detail.querySelector('.imgDetail img').src = thisProduct.imgDetail;
    detail.querySelector('.baiviet p').innerText = thisProduct.baiviet;


    //showw all product
    let listProduct = document.querySelector('.listProduct');
(products.filter(value => value.id != productId))
.forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href = '/cart/detail.html?id=' + product.id;
    // Thay đổi hiệu ứng AOS tại đây
    newProduct.setAttribute('data-aos', 'zoom-in-up'); // Thay đổi thành zoom-in
    newProduct.setAttribute('data-aos-offset', '300'); // Thêm offset
    newProduct.setAttribute('data-aos-easing', 'ease-in-sine'); // Thêm easing
    newProduct.innerHTML = `
    <p class="tragop">${product.tragop}</p>
    <img src="${product.image}">
    <div class="bocngoai">
    <h4>${product.name}</h4>
    <div class="detail-price">
    <p>${product.prices}</p>
    <div class="danhgia-cart">
      <div class="danhgia-icon">
        <p>${product.danhgia}</p>
        
      </div>
      <div class="add-cart-icon">
         <a style="font-weight: bold; color:blue">Xem thêm </a>
      </div>
    </div>
    </div>
    </div>
    `;
    listProduct.appendChild(newProduct);
});

}






const buyNowButton = document.getElementById('buy-now');

// Lấy thông tin sản phẩm hiện tại từ URL
const productIdPay = new URLSearchParams(window.location.search).get('id'); // Lấy ID sản phẩm từ URL
let productsPay = null;

// Fetch data từ products.json để lấy chi tiết sản phẩm
fetch('/products.json')
    .then(response => response.json())
    .then(data => {
        productsPay = data;
        const product = productsPay.find(item => item.id == productIdPay); // Tìm sản phẩm theo ID

        // Sự kiện khi nhấn nút "Mua ngay"
        buyNowButton.addEventListener('click', function () {
            const userConfirmed = confirm(`Đơn hàng ${product.name} đã sẵn sàng, bạn đồng ý mua chứ?`);

            if (userConfirmed) {
                const urlParams = new URLSearchParams({
                    id: product.id,
                    name: product.name,
                    price: product.prices,
                    image: product.image
                });
                window.location.href = `/thanhtoan/thanhtoan.html?${urlParams.toString()}`;
            }
        });

        // addToCartButton.addEventListener('click', function () {
        //     const urlParams = new URLSearchParams({
        //         id: product.id,
        //         name: product.name,
        //         price: product.prices,
        //         image: product.image
        //     });
        //     window.location.href = `/addtocart/cart.html?${urlParams.toString()}`; // Chuyển đến trang giỏ hàng
        // });
    });



    const addToCartButton = document.getElementById('add-to-cart');

    // Giả định bạn đã lấy thông tin sản phẩm trong biến `product`
    const productId = product.id; // Lấy ID sản phẩm
    const productName = product.name; // Lấy tên sản phẩm
    const productPrice = product.prices; // Lấy giá sản phẩm
    const productImage = product.image; // Lấy hình ảnh sản phẩm

    addToCartButton.addEventListener('click', function() {
        // Hiển thị thông báo cho người dùng
        alert('Bạn đã thêm sản phẩm vào giỏ hàng');

        // Tạo URL với thông tin sản phẩm
        const urlParams = new URLSearchParams({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        });

        // Chuyển hướng đến trang giỏ hàng với thông tin sản phẩm
        window.location.href = `/addtocart/cart.html?${urlParams.toString()}`;  // Đảm bảo đường dẫn đúng
    });
    
    















    