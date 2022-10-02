function checkIfMobileDevice() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    
    if (isMobileDevice) {
        document.body.style.display = 'none';
        document.write('This website is not currently supported on mobile devices.')
    }

    document.getElementById("sidebar-footer").style.animationFillMode = 'backwards';
}

let open = false;

function openNav() {
    document.getElementById("sidebar-footer").classList.add("fadein")
    document.getElementById("sidebar-icon").style.transform = "rotate(-90deg)";
    document.getElementById("sidebar").style.width = "250px";
    open = true;
}
  
function closeNav() {
    document.getElementById("sidebar-footer").classList.remove("fadein")
    document.getElementById("sidebar-footer").style.opacity = 0;
    document.getElementById("sidebar-icon").style.transform = "rotate(0deg)";
    document.getElementById("sidebar").style.width = "0";
    open = false;
}

function toggleNav() {
    if (open === false) {
        openNav();
    } else if (open === true) {
        closeNav();
    }
}