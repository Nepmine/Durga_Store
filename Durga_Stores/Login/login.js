
$(document).ready(function() {
    let currentlyVisible = ".form-log-in";
    let currentlyHidden = ".form-sign-up";

    $(".info-item .btn").click(function() {
        $(".form-container").toggleClass("active");
        $(currentlyVisible).fadeToggle(750, function() {
            $(currentlyHidden).fadeToggle();
            s = currentlyVisible;
            currentlyVisible = currentlyHidden;
            currentlyHidden = s;
        });
    });
});

