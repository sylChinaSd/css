//修改注册密码输入框的type类型
function togglePassword(btn) {
    //debugger;
    var input = $('#password');
    btn.textContent = (btn.textContent == '隐藏密码') ? '显示密码' : '隐藏密码';
    input[0].type = (btn.textContent == '隐藏密码') ? 'text' : 'password';
}
//根据录入的密码显示密码的相对复杂性
function toggleProgress(input) {
    console.log("toggleProgress");
    var scores = ["33", "66", "100"];
    var infos = ["低", "中", "高"];

    var pwd = $(input).val();
    var index = -1;
    //匹配正则表达式
    //是否包含特殊字符
    var pattern = new RegExp("[a-zA-Z0-9]+");
    if (pattern.test(pwd)) {
        //是否含有小写、大写、数字
        var pattern1 = new RegExp("[a-z]+");
        var pattern2 = new RegExp("[A-Z]+");
        var pattern3 = new RegExp("[0-9]+");
        pattern1.test(pwd) ? index++ : 0;
        pattern2.test(pwd) ? index++ : 0;
        pattern3.test(pwd) ? index++ : 0;
    } else {
        alert('密码不能包含特殊字符!');
        return;
    }

    var progress = $('#safePrgress');
    //删除原有的样式
    var oldValue = progress.attr("aria-valuenow");
    switch (oldValue) {
        case "33":
            progress.removeClass("progress-bar-danger");
            break;
        case "66":
            progress.removeClass("progress-bar-warning");
            break;
        default:
            progress.removeClass("progress-bar-success");
    }
    //更新各种属性
    progress.attr("aria-valuenow", scores[index]);
    switch (scores[index]) {
        case "33":
            progress.addClass("progress-bar-danger");
            break;
        case "66":
            progress.addClass("progress-bar-warning");
            break;
        default:
            progress.addClass("progress-bar-success");
    }
    progress.css("width", scores[index] + "%");

    var span = $('#safePrgress').children()[0];
    span.textContent = infos[index];
}

//检测第一步验证码以及手机号验证码
function checkPhone() {
    $('#form1').data('bootstrapValidator').validate();
    //除此之外还要根服务器验证短信息
    if ($('#form1').data('bootstrapValidator').isValid()) {
        $('#form1').addClass("hidden-xs");
        $('#form2').removeClass("hidden-xs");
    }
}
//回到第一步
function backFirstStep() {
    $('#form1').removeClass("hidden-xs");
    $('#form2').addClass("hidden-xs");
}
//重置密码
function resetPassword() {
    $('#form2').addClass("hidden-xs");
    $('#form3').removeClass("hidden-xs");
}

$(document).ready(function() {
    $('#form1').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitHandler: function(validator, form, submitButton) {
            debugger;
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '手机号不能为空'
                    }
                }
            },
            code: {
                validators: {
                    notEmpty: {
                        message: '验证码不能为空'
                    }
                }
            },
            mobileCode: {
                validators: {
                    notEmpty: {
                        message: '短信验证码不能为空'
                    }
                }
            }
        }
    });
    //switch组件初始化
    var switchComp = $('#switch');
    switchComp.bootstrapSwitch();
    switchComp.on('switchChange.bootstrapSwitch', function(event, state) {
        var input = $('#password');
        $('#switch').bootstrapSwitch("labelText", state ? "..." : "abc", true);
        input[0].type = state ? 'text' : 'password';
    });

});