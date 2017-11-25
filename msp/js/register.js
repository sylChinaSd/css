 $(document).ready(function() {
     $('#registerForm').bootstrapValidator({
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
                         message: '手机号不能为空'
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