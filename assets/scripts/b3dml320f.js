var subVar;

function showFunction() {
    subVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("head-title-img").style.display = "block";
    //document.getElementById("invite-url").style.display = "block";
    document.getElementById("scroll-btn").style.display = "block";
    document.getElementById("header-nav").style.display = "block";
    document.getElementById("info-section-one").style.display = "block";
    document.getElementById("info-section-two-title").style.display = "block";
    document.getElementById("info-section-two-description").style.display = "block";
}

console.log("Legion v1.0.0 | Activated");