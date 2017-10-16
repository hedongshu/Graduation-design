$(function () {
    //登录注册模态框操作
    $('#loginModal .modal-footer .toSignin').click(function () {
        $('#loginModal').modal('hide');
        $('#signinModal').modal('show');
    });
    $('#signinModal .modal-footer .toLogin').click(function () {
        $('#signinModal').modal('hide');
        $('#loginModal').modal('show'); 
    });

    //注册功能
    $('#signinModal .modal-footer .signinSub').click(function () {
        var username = $('#signinForm input[name="username"]').val();
        var password = $('#signinForm input[name="password"]').val();
        var repassword = $('#signinForm input[name="repassword"]').val();
        if (password == '' || password == '') {
            $('#signinModal .modal-content small').html('用户名或密码不能为空!');

        } else if (password != repassword) {
            $('#signinModal .modal-content small').html('两次输入的密码不一致!');
        } else {
            $.post('/api/user/signin', {
                username: username,
                password: password
            }, function (resData) {
                $('#signinModal .modal-content small').html(resData.message);
            });
        }



    });


    //登录功能
    $('#loginModal .modal-footer .loginSub').click(function () {
        var username = $('#loginModal input[name="username"]').val();
        var password = $('#loginModal input[name="password"]').val();
        if (password == '' || password == '') {
            $('#loginModal .modal-content small').html('用户名或密码不能为空!');
        } else {
            $.post('/api/user/login', {
                username: username,
                password: password
            }, function (resData) {
                $('#loginModal .modal-content small').html(resData.message);
                if(resData.code == 0) {
                    setTimeout(function() {
                        window.location.reload();
                    }, 100);
                }
            });
        }
        
    })

    //退出功能
    $('#logOut').click(function(){
        $.get('/api/user/logout',function(data){
            if(data){
                setTimeout(function() {
                    window.location.reload();
                }, 100);
            };
        })
    })








});