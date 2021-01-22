window.onscroll = function() {
    scrolltop()
};

function scrolltop() {

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {

        document.getElementById("navbar").style.backgroundColor = "var(--nav)";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.05) 0 4px 12px 2px";

        document.getElementById("navbar").style.transition = "all 0.2s";

    } else {

        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";

        document.getElementById("navbar").style.transition = "all 0.2s";
    }
}

function navbardivactivate() {

    document.getElementById("navsidebarcontent").classList.toggle("navsidebarcontentactive");

    document.getElementById("navsidebarbutton").classList.toggle("navsidebarbuttonactive");


    document.getElementById("bar1").classList.toggle("barclick1");

    document.getElementById("bar2").classList.toggle("barclick2");

    document.getElementById("bar3").classList.toggle("barclick3");

}

var subVar;

function showFunction() {
    subVar = setTimeout(showPage, 000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("head-title-img").style.display = "block";
    document.getElementById("head-title-description").style.display = "block";
    //document.getElementById("invite-url").style.display = "block";
    document.getElementById("scroll-btn").style.display = "block";
    document.getElementById("server-stats").style.display = "block";
    document.getElementById("user-stats").style.display = "block";
    document.getElementById("other-stats").style.display = "block";
    document.getElementById("header-nav").style.display = "block";
    document.getElementById("info-section-one").style.display = "block";
    document.getElementById("info-section-two-title").style.display = "block";
    document.getElementById("info-section-two-description").style.display = "block";
}

console.log("Legion v1.0.0 | Activated");