window.onload= ()=>{
    let invId;
    clearInterval(invId);
    const bar = document.querySelector("#fill");          
    let n = -100;
    invId = setInterval(()=>{                
            bar.style.marginLeft = `${n}%`;
            n++;                   
         if( n > 0)
            clearInterval(invId);                   
    },10)
    timeOut();  

};
const timeOut = () => {setTimeout(() => { 
    document.querySelector("#form").style.opacity = "1";
    document.querySelector("#load").style.display = "none";
}, 6000);

};

document.querySelector("#formButtons").onclick = () => {
    const id = document.querySelector("#logID").value;
    const pwd = document.querySelector("#logPW").value;      
    
    const userList = JSON.parse(localStorage.getItem('userList')); 
    let savedId = '';
    let savedPw = '';

    for(let i = 0; i <userList.length ; i++){
        if(userList[i].userId == id && userList[i].userPwd == pwd){
            savedId = id;
            savedPw = pwd;
        }            
    }  

    if(savedId != '' && savedPw != ''){

        sessionStorage.setItem(id, pwd);      
        document.querySelector("#form").style.opacity = "0";
        document.querySelector("#mainOrigin").style.opacity = "0";
        document.querySelector("#mainChange").style.opacity = "1";
        const tags = document.querySelectorAll(".tags");
        for (let tag of tags) {
            tag.style.color = "#C797FF";
        }
        for(let i = 0; i< 3; i++){
            document.querySelector(`#star${i+1}`).src = "../image/VectorPurple.png";
        }                   
        if(id=="admin01"){
            document.querySelector("#xbox").onclick = ()=> {
                open('userPrintTable.html', 'popup', 'width= 700px, height = 500px, left=100px, top=100px');
            };
        }
    } else{
            document.querySelector("#result").innerHTML = `😵‍💫 아이디 또는 비밀번호가 일치하지 않습니다! 😵‍💫` 
    }              
};
document.querySelector("#signupBtn").onclick = () => {
    open('Signup.html')
};