$(function () {
    //textarea高度自适应
    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    //用户管理
    //修改密码
    $("#usertable .change").click(function () {
        if (confirm("是否修改为表格内数据？")) {
            var td = $(this).parent().siblings();
            $.post('/admin/changeword', {
                id: $(td[0]).text(),
                newPassword: $(td[2]).text()
            }, function (data) {
                alert(data);
            })
        }

    })
    //删除数据
    $("#usertable .remove").click(function () {
        if (confirm("是否删除该用户数据？")) {
            var td = $(this).parent().siblings();
            $.post('/admin/removeuser', {
                id: $(td[0]).text(),
            }, function (data) {
                alert(data);
            })
        }

    })

    //分类管理
    //修改分类名
    $("#allClass .change").click(function () {
        if (confirm("是否修改为表格内数据？")) {
            var td = $(this).parent().siblings();
            $.post('/admin/changeClass', {
                id: $(td[0]).text(),
                name: $(td[1]).text()
            }, function (data) {
                alert(data);
            })
        }
    })
    //删除分类
    $("#allClass .remove").click(function () {
        if (confirm("是否删除这条分类？")) {
            var td = $(this).parent().siblings();
            $.post('/admin/removeClass', {
                id: $(td[0]).text(),
            }, function (data) {
                alert(data);
                location.reload();
            })
        }
    })
    //添加分类
    $('#addClass button').click(function () {
        if ($('#addClass input').val() == '') {
            alert('字段不能为空');
            return;
        }
        $.post('/admin/addClass', {
            classname: $('#addClass input').val()
        }, function (data) {
            alert(data);
            location.assign('/admin/allClass');
        })
    });

    //内容管理
    //添加文章
    $('#addContent button').click(function () {
        if (
            $('#title').val() == '' || $('#classify').val() == '' || $('#synopsis').val() == '' || $('#content').val() == ''
        ) {
            alert('任意字段均不能为空！');
            return;
        }
        $.post('/admin/addContent', {
            //标题
            title: $('#title').val(),

            //分类
            classify: $('#classify').val(),

            //简介
            synopsis: $('#synopsis').val(),

            //内容
            content: $('#content').val(),
        }, function (resData) {
            console.log(resData);
            alert(resData);
        })
    })
    //修改文章内容
    $('#changeSave').click(function () {
        if (confirm("是否确认修改？")) {
            $.post('/admin/changeSave', {
                //id
                id: $('#hidden').val(),

                //标题
                title: $('#title').val(),

                //分类
                classify: $('#classify').val(),

                //简介
                synopsis: $('#synopsis').val(),

                //内容
                content: $('#content').val(),
            }, function (data) {
                alert(data);
            })
        }

    })

});