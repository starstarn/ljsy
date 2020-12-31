
window.onload = function (){
    var Btn1 = document.getElementById("send");
    Btn1.onclick = function(){
        var text1 = document.getElementById("con").value;
        /* if(!text1){
            alert("留言内容不能为空！");
            console.log("空") 
        } */

        addli();
        document.getElementById("con").value=" ";
        //add();
    }

    var clear = document.getElementById("clear");
    clear.onclick = function(){
        document.getElementById("con").value=" ";
        console.log("清空");
    }
		
    timer = setInterval(function(){
        var myDate = new Date();
        var time = myDate.toLocaleString();
        //console.log(myDate.toLocaleString( ));
        //console.log(typeof(time));
        var time1 = document.getElementById("time1");
        time1.innerText = time;  
    },1000);


    function addli (){
        
        var name = document.getElementById("name").value;
        if(!name){
            name = "XXX";
        }
        console.log(name);

        

        var name1 = document.createElement('label');
        name1.innerHTML = "留言人:&nbsp;";
        document.getElementById("add").appendChild(name1);

        var namer = document.createElement('label');
        namer.innerHTML = name;
        document.getElementById("add").appendChild(namer);

        var space = document.createElement('label');
        space.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById("add").appendChild(space);

        var sj = document.createElement('label');
        sj.innerHTML = "留言时间:&nbsp;";
        document.getElementById("add").appendChild(sj);

        var Otimer = document.createElement('label');
        Otimer.innerHTML = time1.innerHTML;
        console.log(Otimer.innerHTML);
        document.getElementById("add").appendChild(Otimer);
 
        var Op = document.createElement("p");
        document.getElementById("add").appendChild(Op);

        var nr = document.createElement('label');
        nr.innerHTML = "留言内容:&nbsp;";
        document.getElementById("add").appendChild(nr);

        var content = document.createElement('span');
        content.innerHTML = document.getElementById("con").value;
        document.getElementById("add").appendChild(content);

        var Op = document.createElement("p");
        document.getElementById("add").appendChild(Op);

        var line = document.createElement("hr");
        document.getElementById("add").appendChild(line);
    }

}
