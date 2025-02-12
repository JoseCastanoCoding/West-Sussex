

jQuery(document).ready(function() {
 
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');

    });

    $('#goToWhatIDoMainCardSection').on("click", function () {

        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {
            $('html, body').animate({ scrollTop: $('.whatIDoMainCard').offset().top }, 'smooth');
        }, 500);
        
    });
 
    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    var app = document.getElementById('typewriterHomepage');

    var typewriter = new Typewriter(typewriterHomepage, {
        loop: false,
        delay: 75,
    });

    typewriter
    .pauseFor(1500)
    .typeString('<h1>West Sussex Web Design</h1>')
    .typeString('<br>')
    .pauseFor(750)
    .typeString("<h1>Your down-to-earth website developer</h1>")        
    .start();

    const animatedElements = document.querySelectorAll("[data-animate]");

    const handleScroll = () => {
        const windowBottom = window.innerHeight + window.scrollY;

        animatedElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top + window.scrollY;

            if (windowBottom > elementTop + 100) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    };

  handleScroll(); // Run on page load
  window.addEventListener("scroll", handleScroll);

});