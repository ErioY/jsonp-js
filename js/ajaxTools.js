
//功能：与后端交互
//参数：

//请求方式
//请求地址
//请求参数（前端发给后端）
//是否异步
//回调函数

//返回值：无

function ajax_xk(obj){
    let defaultObj = {
        method:"get",
        url:"#",
        params:"",
        isAsync:true,
        func:null
    }

    for(let key in defaultObj){
        if(obj[key]!=undefined){
            defaultObj[key] = obj[key];
        }
    }

    //1、创建对象
    let xhr = new XMLHttpRequest();

    //2、设置请求参数
    let urlAndParams = defaultObj.url;
    if(defaultObj.method.toLowerCase()=="get"){
        urlAndParams += "?"+defaultObj.params
    }

    xhr.open(defaultObj.method,urlAndParams,defaultObj.isAsync);

    //3、设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            defaultObj.func&&defaultObj.func(xhr.responseText);
        }
    }

    if(defaultObj.method.toLowerCase()=="post"){
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(defaultObj.params);
    }else{
        xhr.send();
    }
}