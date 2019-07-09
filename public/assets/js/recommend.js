//索要热门推荐数据

$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success: function (res) {
        // console.log(res);
        //为了将模板变成公共的,所以将模板写在了js文件中
        var recommendTpl = `
        {{each data}}
    <li>
        <a href="detail.html?id={{$value._id}}">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
        </a>
    </li>
      {{/each}}
        `;
        var html = template.render(recommendTpl, { data: res });
        // console.log(html);
        $('#recommendBox').html(html);
    }

})