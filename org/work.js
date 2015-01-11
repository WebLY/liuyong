   $(document).ready(function(){
    $(".buu").click(function(){
        $("#panel").slideToggle("slow");
      });
    });
    $(document).ready(function(){
    $(".list").click(function(){
        $(".menu").slideToggle("slow");
      });
    });
    $(document).ready(function(){
    $(".process").click(function(){
        $(".process ul").slideToggle("slow");
      });
    });
window.onload=function(){
    var row=document.getElementById('row');
    var nav=document.getElementById('nav').getElementsByTagName('li');
    var con=document.getElementById('con').getElementsByTagName('li');
    var next=document.getElementById('next');
    var before=document.getElementById('before');
    var index=0;
    var timer=null;
    next.onclick=function(){
        index++;
        if(index>=5){
            index=0;
        }
        changenav();
        changecon();
    }
    before.onclick=function(){
        index--;
        if(index<0){
            index=4;
        }
        changenav();
        changecon();
    }
    for(var i=0;i<nav.length;i++){
        nav[i].name=i;
        nav[i].onclick=function(){
            index=this.name;
            changenav();
            changecon();
        }
    }
    function changecon(){
        for(var i=0;i<con.length;i++)
        {
            if(con[i].style.display=='block'){
                con[i].style.display='none';
                break;
            }
        }
        con[index].style.display='block';
    }
    function changenav(){
        for(var i=0;i<con.length;i++)
        {
            if(nav[i].className=='on'){
                nav[i].className=' '
            }
        }
        nav[index].className='on';
    }
    function play(){
        if(timer){
            clearInterval(timer);
        }
        timer=setInterval(function(){next.onclick()},2300)
    }
    function stop(){
        clearInterval(timer);
    }
    play();
    row.onmouseover=stop;
    row.onmouseout=play;
}