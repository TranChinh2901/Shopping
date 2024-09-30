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
fetch('../products.json')
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





