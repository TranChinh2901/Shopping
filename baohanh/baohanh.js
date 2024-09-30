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
