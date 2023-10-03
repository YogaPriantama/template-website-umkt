document.addEventListener("DOMContentLoaded", function(){
    
    window.addEventListener('scroll', function() {
        var initialSrc = "images/logo-umkt-hitam.png";
        var scrollSrc = "images/logo-umkt-putih.png";
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.remove('navbar-light');
            document.getElementById('navbar_top').classList.remove('bg-light');
            document.getElementById('navbar_top').classList.add('navbar-dark');
            document.getElementById('navbar_top').classList.add('fixed-top');
            $("#logo").attr("src", scrollSrc);
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            $("#logo").attr("src", initialSrc);
            document.getElementById('navbar_top').classList.remove('navbar-dark');
            document.getElementById('navbar_top').classList.add('navbar-light');
            document.getElementById('navbar_top').classList.add('bg-light');
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
}); 
// DOMContentLoaded  end

// Counter
$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});