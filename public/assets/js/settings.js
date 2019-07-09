//当管理员选择logo图片时
$('#logo').on('change', function () {
    //获取到管理员选择到的图片
    var file = this.files[0];
    //创建formData对象 实现二进制文件上传
    var formData = new FormData();
    formData.append('logo', file);

    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            // console.log(res);
            //将图片的路径保存到隐藏域中
            $('#hiddenLogo').val(res[0].logo);
            $('#preview').attr('src', res[0].logo);
        }
    })
});


$('#settingsForm').on('submit', function () {
    //获取管理员在表单中输入的内容
    var formData = $(this).serialize();
    // console.log(formData)
    $.ajax({
        type: 'post',
        url: '/settings',
        data: formData,
        success: function () {
            location.reload();
        }
    })
    return false;
});

$.ajax({
    type: 'get',
    url: '/settings',
    success: function (res) {
        // console.log(res);
        if (res) {
            //将logo地址储存到隐藏于中
            $('#hiddenLogo').val(res.logo);
            //将logo显示在页面中
            $('#preview').attr('src', res.logo);
            //将网站标题显示在页面中
            $('input[name="title"]').val(res.title);
            //将是否开启评论功能显示在页面中
            $('input[name="comment"]').prop('checked', res.comment);
            //将评论是否经过人工审核显示再页面中
            $('input[name ="review"]').prop('checked', res.review);
        }
    }
});
