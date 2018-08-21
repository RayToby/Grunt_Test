var isAndroid = window.navigator.userAgent.toLowerCase().indexOf('android') > -1 || window.navigator.userAgent.toLowerCase().indexOf('adr') > -1;
var isiOS = !!window.navigator.userAgent.toLowerCase().match(/\(i[^;]+;( u;)? cpu.+mac os x/);
document.body.addEventListener("click", function(e){
    if(e.target.className && e.target.className.indexOf("download") > -1) {
        // alert("敬请期待...");
        if(isiOS) {
            window.location.href = "https://url.mc.cn/UZJFVvaa"; // "https://itunes.apple.com/us/app/米橙/id1340082291?l=zh&ls=1&mt=8";
            return;
        }
        if(isAndroid) {
            window.location.href = "https://url.mc.cn/b6va2yaa";
            return;
        }
        alert("请使用手机下载APP");
    }
})