var clientHeight = 0;
$(document).ready(function() {
    $("#evaluation-ul").on("click", function(e) {
        var content = "";
        if (e.target) {
            //content=全部评论、好评、差评、有图
            content = e.target.textContent;
            //向后台请求对应的数据
        }
    });
    //屏幕的高度
    clientHeight = $(window).height();
    //动态显示回到顶部按钮
    $(window).on("scroll", function() {
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var gt = $("#goto-top");
        if (scrollTop > clientHeight) {
            if (gt.hasClass("hidden")) {
                gt.removeClass("hidden");
            }
        } else {
            if (!gt.hasClass("hidden")) {
                gt.addClass("hidden");
            }
        }
    });
    //滑动轮播条的事件
    $("#carousel1").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "left") {
                $("#carousel1").carousel('next');
            } else if (direction == "right") {
                $("#carousel1").carousel('prev');
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 30
    });
    //加入购物车按钮 
    $("#shopping-cart").popover({
        //container:"li",
        content: '成功加入购物车！',
        trigger: "manual",
        placement: "top",
        template: '<div class="popover popover-msp" role="tooltip"><div class="arrow arrow-msp"></div><h3 class="popover-title"></h3><div class="popover-content popover-content-msp"></div></div>'
    });
    $("#addBtn").on("click", function() {
        //debugger;
        $("#shopping-cart").popover("show");
        setTimeout(function() {
            $("#shopping-cart").popover("hide");
        }, 2000);
    });
    //心型按钮，收藏作用
    $("#heart").on("click", function() {
        var icon = $("#heart").find("i:first");
        if (icon.length) {
            if (icon.hasClass("fa-heart-o")) {
                icon.removeClass("fa-heart-o").removeClass("text-muted").addClass("fa-heart").addClass("text-danger");
            } else if (icon.hasClass("fa-heart")) {
                icon.removeClass("fa-heart").removeClass("text-danger").addClass("fa-heart-o").addClass("text-muted");
            }
        }
    });
});