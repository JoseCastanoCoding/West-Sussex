

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

    $('#goToPlatformsSection').on("click", function () {

        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {
            $('html, body').animate({ scrollTop: $('.ecommercePlatforms').offset().top }, 'smooth');
        }, 500);
        
    });

    $('#goToPricePlansSection').on("click", function () {

        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {
            $('html, body').animate({ scrollTop: $('.pricePlans').offset().top }, 'smooth');
        }, 500);
        
    });

    $('#goToContactFormSection').on("click", function () {

        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {
            $('html, body').animate({ scrollTop: $('.contactMeForm').offset().top }, 'smooth');
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

  $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $('.accordion_head p').text('Read more...');
            $('.accordion_head span.plusminus').text('+');
        } else {
            $(".accordion_body").slideDown(300);            
            $('.accordion_head p').text('Read less');
            $('.accordion_head p .plusminus').text('-');
        }
    });

});

$('#contactFormCustomerDetails').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_e8zfcza');
    formData.append('template_id', 'template_1bly4l6');
    formData.append('user_id', 'NwRE7fbZdGQeHfDDK');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {        
        $('#contactFormCustomerDetails')[0].reset();
        $('#customerFormSentModal').modal('show');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});