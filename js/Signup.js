document.memberFrm.onsubmit = function(e){
    const errmsg = document.querySelector("#errMsg");
    let flag = true;
    const tests = (re, element, type) => {
        if(!re.test(element)){
            errmsg.innerHTML = `올바르지 않은 ${type} 입력되었습니다!<br>😵😵😵😵😵`;
            document.querySelector("#wariningmsg button").innerHTML= "OK";
            errmsg.style.color = "rgb(133, 38, 200)";
            e.preventDefault();
            flag = false;
        }
    };
    const id = document.querySelector("#userId").value;
    const idRe = /^[a-z](?=.*\d)([a-zA-Z]|\d){3,11}$/;
    const pwd = document.querySelector("#pwd").value;
    const pwdRe = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!&/\\*@]).{8,12}$/;
    const name = document.querySelector("#userName").value;
    const nameRe = /^[가-힣]{2,}$/;
    const email = document.querySelector("#email").value;
    const emailRe = /^([a-zA-Z]|\d){4,12}@.{1,}$/;
    const tel1 = document.querySelector("#tel1").value;
    const tel1Re = /^\d{2,}$/;
    const tel2 = document.querySelector("#tel2").value;
    const tel2Re = /^\d{3,}$/;
    const tel3 = document.querySelector("#tel3").value;
    const tel3Re = /^\d{4}$/;

    const elements = [id, pwd, name, email, tel1, tel2, tel3];
    const re = [idRe, pwdRe, nameRe, emailRe, tel1Re, tel2Re, tel3Re];
    const types = ["아이디가", "비밀번호가", "이름이", "이메일이", "전화번호가", "전화번호가", "전화번호가"];

    for(let i = 0; i < elements.length ; i++){
        tests(re[i], elements[i], types[i]);
    };
    const pwcheck = document.querySelector("#pwdCheck").value;
    if(pwd != pwcheck){
        e.preventDefault();
        errmsg.innerHTML = "비밀번호가 일치하지 않습니다!<br>😱😱😱😱😱";
        errmsg.style.color = "rgb(133, 38, 200)";
        document.querySelector("#wariningmsg button").innerHTML= "OK";
        flag = false;
    };
    if(flag){
        const user = {
            userId : id,
            userPwd : pwd,
            userName : name,
            userEmail : email,
            phone : tel1 + "-" + tel2 + "-" + tel3
        };
        
        const userList = JSON.parse(localStorage.getItem('userList')) || [];
        userList.push(user);
        const jsonStr = JSON.stringify(userList);
        localStorage.setItem("userList", jsonStr);

        errmsg.innerHTML= `💞 회원가입 완료! 💞<br>${name}님 반갑습니다!`;
        document.querySelector("#wariningmsg button").innerHTML= "♥ ♥ ♥";
        errmsg.style.color = "black";
    }

};

document.querySelector("#wariningmsg button").onclick = function(e){
    document.querySelector("#errMsg").innerHTML= "I am really pleased to meet you!<br>Would you go travel in space with me?";
    document.querySelector("#wariningmsg button").innerHTML= "Yes!";
    document.querySelector("#errMsg").style.color = "black";
}
document.querySelector("#button2").onclick = function(e){
    document.querySelector("#errMsg").innerHTML= "I am really pleased to meet you!<br>Would you go travel in space with me?";
    document.querySelector("#wariningmsg button").innerHTML= "Yes!";
    document.querySelector("#errMsg").style.color = "black";
}
