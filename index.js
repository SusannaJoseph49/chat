var data= {
    chatinit:{
        title: ["Hello, How can I help you?"],
        options: ["Movies","News","Shopping","Music"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Mollywood']
    },
    hollywood: {
        title: ["hollywood genres"],
        options: ["Comedy","Horror","Sci-Fi"]
    },
    bollywood: {
        title: ["bollywood genres"],
        options: ["Romance","Action"]
    },
    mollywood: {
        title: ["mollywood genres"],
        options: ["Horror","Sci-Fi","Romance"]
    },
    news: {
        title:["Top news"],
        options:["news1","news2","news3"]
    },
    shopping: {
        title:["what to shop?"],
        options:['Electronics','Clothes','Groceries']
    },
    electronics: {
        title:["some electronics below"],
        options:['Televisions','Cameras']
    },
    Clothes: {
        title:["some clothes below"],
        options:['Shirts','Pants','Socks']
    },
    Groceries: {
        title:["Some groceries below"],
        options:['Apple','orange','carrot']
    },
    music: {
        title:["latest songs "],
        options: ["song 1","song 2"]
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }
    setTimeout(function(){
        if (options && options.length > 0) {
            showOptions(options);
        } else {
            endChat();
        }
    }, title.length * 500);
}

function endChat() {
    var elm= document.createElement("p");
    elm.innerHTML= "End of options. Thank you!";
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}
