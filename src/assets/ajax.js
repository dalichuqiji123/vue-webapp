function cNode(url, type, data, callback) {
    let defaultUrl = "https://cnodejs.org/api/v1";
     let  xhr=new  XMLHttpRequest();
     
     let  data1=""
     if(typeof data == "string"){
          data1=data;
     }else if(typeof data== "object"&& data!== null &&  data.constructor==Object){
            //为对象时 处理参数
            for(let key  in  data){
                data1+=key+"="+data[key]+"&";
            }
           //去除最后一个&
          data1=data1.substring(0,data1.length-1);
     }
     if(type.toLowerCase()=="get"){
        xhr.open("get",defaultUrl+url+"?"+data1,true);
        xhr.send();
    }else if(type.toLowerCase()=="post"){
        xhr.open("post",defaultUrl+url,true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        xhr.send(data1);
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status>=200&&xhr.status<300){
                let  res=xhr.responseText;
                res=JSON.parse(res)
                // console.log(res);
                    callback && callback(res)
                
            }
        }
    }
   
  }
//导出js
  export   default cNode