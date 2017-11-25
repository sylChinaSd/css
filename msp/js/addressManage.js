var clientHeight = 0;
$(document).ready(function() {
    clientHeight = $(window).height();
    $(window).on("scroll", function() {
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var tip = $("#tip");
        if (tip.hasClass("hidden")) {
            tip.removeClass("hidden");
        }
        if (Math.abs(scrollTop + clientHeight - htmlHeight) == 0 && tip.hasClass("hidden")) {
            tip.removeClass("hidden");
        }
    });
    //顶部的导航栏
    $("#topNav").on("click", function(e) {
        var parent = $(e.target).closest("li");
        //点击的类型
        var type = "";
        if (parent.length) {
            if (!parent.hasClass("active-red")) {
                parent.addClass("active-red");
                type = $.trim(e.target.textContent);
            }
        }
        var siblings = parent.siblings();
        if (siblings.length) {
            for (var i = 0; i < siblings.length; ++i) {
                var li = $(siblings[i]);
                if (li.hasClass("active-red")) {
                    li.removeClass("active-red");
                }
            }
        }

    });
});