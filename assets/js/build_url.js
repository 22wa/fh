function build_url(){
    var url = encodeURI(decodeURI(document.querySelector('#url').value));
    if (url === "" || url.indexOf("http") === -1){
        document.getElementById("b_url").innerHTML=`输入的不是链接或者未加http请求头！`;
    }
    else {
        url = "https://22wa.github.io/fh/" + "api/?url=" + url;
        document.getElementById("b_url").innerHTML=`<a href=${url} target='_blank'>${url}</a>`;
    }
}



/**
*url = document.location.href + "api/?url=" + url;
*/

