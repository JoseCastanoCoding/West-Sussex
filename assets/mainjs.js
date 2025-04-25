

jQuery(document).ready(function() {
 
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');

    });

    $('#goToHomeSection').on("click", function () {

        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {
            $('html, body').animate({ scrollTop: 0 }, 'smooth');
        }, 500);
        
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

    $('#goToPortfolioSection').on("click", function () {


        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        
        setTimeout(() => {

            $('html, body').animate({ scrollTop: $('.pricePlans').offset().top }, 'smooth');

            $('html, body').animate({ scrollTop: $('.portfolio-and-testimonials').offset().top }, 'smooth');

        }, 500);
        
    });


    $('#goToContactMeSection').on("click", function () {


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

  $(".accordion_head").on("click", function () {
        if ($(this.nextElementSibling).is(':visible')) {
            $(this.nextElementSibling).slideUp(300);
            $(this.children[0]).text('Read more...');
            $(this.children[1]).removeClass('fa-minus').addClass('fa-plus');        
        } else {
            $(this.nextElementSibling).slideDown(300);            
            $(this.children[0]).text('Read less...');
            $(this.children[1]).removeClass('fa-plus').addClass('fa-minus');            
        }
    });

    var termsAndConditionsModal = $("#termsAndConditionsModal");
    $("#termsAndConditions").on("click", function() {
        termsAndConditionsModal.modal("show");
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