$.ajax({
    type: 'get',
    url: '/posts/count',
    success: function (res) {
        // console.log(res);
        // return;
        $('#zonwenz').text(res.postCount);
        $('#caogao').text(res.draftCount);
    }
});

$.ajax({
    type: 'get',
    url: '/categories/count',
    success: function (res) {
        // console.log(res);
        // return;
        $('#fenglei').text(res.categoryCount);
    }
});

$.ajax({
    type: 'get',
    url: '/comments/count',
    success: function (res) {
        // console.log(res);
        // return;
        $('#pinlun').text(res.commentCount);
    }
});