window.onload = function(){
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");

    var content = document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");
    var psw = document.querySelector(".psw")
    var wrong = document.getElementById("wrong")
    var error = document.getElementById("error")
    var rpsw = document.querySelector(".RPsw")
 

    for(let i = 0; i<it.length;i++){
        it[i].onclick = function(){
            for(let j=0;j<it.length;j++){
                it[j].className = '';
                con[j].style.display = 'none';
            }
            this.className="active";
            it[i].index = i;
            con[i].style.display = "block";
        }
    }
    psw.onblur = function(){
        if(this.value.length < 6 || this.value.length >16){
            wrong.className='message';
            wrong.innerHTML='please enter 6-16 lenth for password';
          
        }
    }
      rpsw.onblur = function(){
        if(this.value.length < 6 || this.value.length >16){
            error.className='message';
            error.innerHTML='please enter 6-16 lenth for password';
          
        }
    }




}