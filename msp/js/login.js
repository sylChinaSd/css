$(document).ready(function() {
    $('#loginForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitHandler: function(validator, form, submitButton) {
            var href = window.location.href;
            href = href.substring(0, href.lastIndexOf('/') + 1) + 'index.html';
            window.location.href = href;
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            },
            code: {
                validators: {
                    notEmpty: {
                        message: '验证码不能为空'
                    }
                }
            }
        }
    });
    //使用icheck
    $('#rememberMe').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
});