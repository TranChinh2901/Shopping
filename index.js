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



// Đoạn xử lý slider
// let slideIndex = 0;
// showSlides();
// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
// if(slideIndex > slides.length){
//    slideIndex = 1
// }
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 4000); 
// }


// xử lý bộ đếm ngược thời gian
let countdownTime = new Date().getTime() + 3 * 60 * 60 * 1000;

// Hàm cập nhật bộ đếm ngược
function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = countdownTime - now;

    // Tính toán giờ, phút và giây còn lại
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Cập nhật HTML để hiển thị thời gian
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    // Khi thời gian kết thúc, dừng bộ đếm
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").textContent = "Time's up!";
    }
}

// Cập nhật bộ đếm ngược mỗi giây
let timerInterval = setInterval(updateCountdown, 1000);

// Khởi động lần đầu tiên
updateCountdown();



// Lấy dữ liệu từ products.json

let products = null;
fetch('products.json')
.then(response => response.json())
.then(data =>{
    products = data;
    console.log(products);
    addDataToHTML();
})
//dữ liệu
let listProduct = document.querySelector('.listProduct');
function addDataToHTML(){
    products.forEach(product => {
        //Tạo một element mới
        let newProduct = document.createElement('a');
        newProduct.href = '/cart/detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.setAttribute('data-aos', 'zoom-in-up'); // Thay đổi thành zoom-in
        newProduct.setAttribute('data-aos-offset', '300'); // Thêm offset
        newProduct.setAttribute('data-aos-easing', 'ease-in-sine'); // Thêm easing
        newProduct.innerHTML = `
        <p class="tragop">${product.tragop}</p>
        <img src="${product.image}">
        <div class="bocngoai">
        <h4>${product.name}</h4>
        <div class="detail-price">
        <p style="color:red">${product.prices}</p>
        <div class="danhgia-icon">
        <p>${product.danhgia}</p> 
        <a style="font-weight: bold; color:blue">Xem thêm </a>
        </div>
        </div>
        </div>
        `;
        //Thêm element này vào listproduct
        listProduct.appendChild(newProduct);
    })
};

console.log(listProduct);



// let productDealHot = null;
// fetch('products.json')
// .then(response => response.json())
// .then(data =>{
//     productDealHot = data;
//     console.log(productDealHot);
//     addDataToHTML();
// })
// //dữ liệu
// let listProductDealHot = document.querySelector('.listProductDealHot');
// function addDataToHTML(){
//     productDealHot.forEach(productDealHotItem => {
//         //Tạo một element mới
//         let newProductDealHot = document.createElement('a');
//         newProductDealHot.href = '/cart/detail.html?id=' + productDealHotItem.id;
//         newProductDealHot.classList.add('item');
//         newProductDealHot.setAttribute('data-aos', 'zoom-in-up'); // Thay đổi thành zoom-in
//         newProductDealHot.setAttribute('data-aos-offset', '300'); // Thêm offset
//         newProductDealHot.setAttribute('data-aos-easing', 'ease-in-sine'); // Thêm easing
//         newProductDealHot.innerHTML = `
//         <p class="tragop">${productDealHotItem.tragop}</p>
//         <img src="${productDealHotItem.image}">
//         <div class="bocngoai">
//         <h4>${productDealHotItem.name}</h4>
//         <div class="detail-price">
//         <p style="color:red">${productDealHotItem.prices}</p>
//         <div class="danhgia-icon">
//         <p>${productDealHotItem.danhgia}</p> 
//         <a style="font-weight: bold; color:blue">Xem thêm </a>
//         </div>
//         </div>
//         </div>
//         `;
//         //Thêm element này vào listproduct
//         listProductDealHot.appendChild(newProductDealHot);
//     })
// };








document.getElementById('cart-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'addtocart/cart.html'; 
});








// Hàm này sẽ được gọi khi ngôn ngữ được thay đổi
function changeLanguage(language) {
    // Tải file JSON tương ứng với ngôn ngữ đã chọn
    fetch(`${language}.json`)
      .then(response => response.json())
      .then(data => {
        // Cập nhật các phần tử trong trang với bản dịch từ JSON
        document.querySelector('.nav-link.home').textContent = data.home;
        document.querySelector('.nav-link.news').textContent = data.news;
        document.querySelector('.nav-link.warranty').textContent = data.warranty;
        document.querySelector('.nav-link.contact').textContent = data.contact;
        document.querySelector('.account-text').textContent = data.account;
        document.querySelector('.cart-text').textContent = data.cart;
        document.querySelector('.flashsales-top h2').textContent = data.flash_sales;
      })
      .catch(error => console.error('Error:', error));
  }
  