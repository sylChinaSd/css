function selectAll(btn) {
    var icon = $(btn).find("i");
    var checkboxs = $('input[type=checkbox]');
    if (icon.hasClass("fa-toggle-off")) {
        icon.removeClass("fa-toggle-off");
        icon.addClass("fa-toggle-on");
        //选择全部                
        checkboxs.iCheck("check");
    } else if (icon.hasClass("fa-toggle-on")) {
        icon.addClass("fa-toggle-off");
        icon.removeClass("fa-toggle-on");
        //取消选择全部
        checkboxs.iCheck("uncheck");
    }
}
$(document).ready(function() {
    //使用icheck
    $('input[type=checkbox]').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red',
        increaseArea: "30%"
    });
});