import './assets/scss/all.scss';

$(document).ready(function(){
    $("#topBar").click(function(){
      $("#topMenu").slideToggle("slow");
    });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(function(){
  var $li = $('ul.tab-title li');
      $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
  
      $li.click(function(){
          $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
          $(this).addClass('active'). siblings ('.active').removeClass('active');
      });
  });


var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

//發表文章頁面裡跳出訊息的js
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//log in page

document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("login-form");
  
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // 这里可以添加验证逻辑，比如检查用户名和密码是否正确
    
    if (username === "golfer" && password === "golf123") {
      alert("Login successful!");
    } else {
      alert("Login failed. Please check your username and password.");
    }
  });
});

AOS.init();