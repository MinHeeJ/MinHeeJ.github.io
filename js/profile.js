window.onload=()=>{
    let invId;
    clearInterval(invId);
    const boxes = document.querySelectorAll(".profileBox");          
    let n = 0;
    invId = setInterval(()=>{
        if(n<3){
            boxes[n].style.opacity = "1";
            n++;                   
        } else{
            clearInterval(invId);
        }},300)

    let percent = 20;
    let step = 1;
    document.querySelector("#roadmap").onclick = (e) => {
        const loading = document.querySelector("#fill");
        const clickHere = document.querySelector("#clickHere");
        if(percent ==100){
            clickHere.style.display = "none";
        }
        if(percent<=100) {
            loading.style.transform = `translateX(${percent}%)`;
            document.querySelector(`#STEP${step}`).style.opacity = "1";
            percent += 20;
            step++;             
            document.querySelector("#roadmap").style.backgroundImage = "url(../image/VectorPurple.png)";
        } 
    };
};