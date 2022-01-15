$(function () {
    var bar = '';
    bar += '<div class="footer">';
    bar += '<div class="footerText"> ⭐ Updates Coming Soon! ⭐ </div>';
    bar += '<div class="footerText" style="font-size: 25px;"> Website is still under construction! Thank you for your patience. </div>';
    bar += '</div>';
    $("#footer-area").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('footer-lol').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
