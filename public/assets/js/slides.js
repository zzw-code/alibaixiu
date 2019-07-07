//当管理员选择文件的时候
$('#file').on('change', function () {
    //用户选择到的文件
    var file = this.files[0];
    // console.log(file);
    //创建formData对象实现二进制文件上传
    var formData = new FormData();
    //将管理员选择到的文件添加到formData对象中
    formData.append('image', file);
    // console.log(formData);
    // return;
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            // console.log(response[0].image);

            $('#image').val(response[0].image);
        }
    })
});

//当轮播图表当发生提交行为
$('#slidesForm').on('submit', function () {
    //获取用户在文本框中输入的内容
    var formData = $(this).serialize();
    // console.log(formData);

    $.ajax({
        type: 'post',
        url: '/slides',
        data: formData,
        success: function () {
            location.reload();
        }
    })

    //阻止表单默认行为
    return false;
});


//向服务端发送请求 索要图片轮播列表数据
$.ajax({
    type: 'get',
    url: '/slides',
    success: function (response) {
        var html = template('slidesTpl', { data: response });
        $('#slidesBox').html(html);
    }
})

$('#slidesBox').on('click', '.delete', function () {
    if (confirm('您真的要进行删除操作吗?')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/slides/' + id,
            success: function () {
                location.reload();
            }
        })
    }
})