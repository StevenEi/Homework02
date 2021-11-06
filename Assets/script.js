clickCounterAbout = 0
clickCounterProjects = 0

$("#about-btn").on("click", function () {
    if(clickCounterAbout == 0) {
        $("#about-me-card").css("visibility", "visible")
        clickCounterAbout++
    }
    else {
        $("#about-me-card").css("visibility", "hidden")
        clickCounterAbout = 0
    }
});

$("#close-btn-about").on("click", function () {
    $("#close-btn-about").parent().css("visibility", "hidden")
    clickCounterAbout = 0
});

$("#projects-btn").on("click", function () {
    if(clickCounterProjects == 0) {
        $("#projects-card").css("visibility", "visible")
        clickCounterProjects++
    }
    else {
        $("#projects-card").css("visibility", "hidden")
        clickCounterProjects = 0
    }
});

$("#close-btn-projects").on("click", function () {
    $("#close-btn-projects").parent().css("visibility", "hidden")
    clickCounterProjects = 0
});

$("home-icon").on("click", function() {
    history.go(0)
})

$(".container-main").ripples({
    resolution: 512,
    dropRadius: 25,
    interactive: true,
    perturbance: 0.05,
});

$("#btn-memory").on("click", function () {
    $("#memory-modal").css("display", "block")
})

$("#btn-gag").on("click", function () {
    $("#gag-modal").css("display", "block")
})

$("#btn-CSS").on("click", function () {
    $("#CSS-modal").css("display", "block")
})

$(".close-modal").on("click", function(){
    $(".modal").css("display", "none")
})

/*
class = icons -> where the icons content is going to be
class = github-icon and class = linkedin-icon need clickable icons and to be linked to the website location
class = homepage-icon will return the user to the starting page / where it loads in
*/