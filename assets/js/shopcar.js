//移除按鈕
function rm(obj){
    var table = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;
    
    table.removeChild(tr);
}

//數字減少
function low(num){
    let input =Number(document.getElementsByClassName("value")[num].value);
    if(input<0||input*10%10 !=0){
        alert("請輸入正整數")
        document.getElementsByClassName("value")[num].value=1
    }
    else if(input!=1){
        document.getElementsByClassName("value")[num].value=input-1
        }
        else{
            document.getElementsByClassName("value")[num].value=1
        }
}

//數字增加
function high(num){
    let input =Number(document.getElementsByClassName("value")[num].value);
    if(input<0||input*10%10 !=0){
        alert("請輸入正整數")
        document.getElementsByClassName("value")[num].value=1
    }
    else {
        document.getElementsByClassName("value")[num].value=input+1
        }
      
}

//計算total
//var price =document.getElementById("price").value;
//var total = price*value;
//doucument.write();


