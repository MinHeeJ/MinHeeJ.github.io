const contries = {
    australia : ["../image/Australia1.jpg","../image/Australia2.jpg","../image/Australia3.jpg","../image/Australia4.jpg"],
    czech : ["../image/Czech1.jpg","../image/Czech2.jpg","../image/Czech3.jpg","../image/Czech4.jpg"],
    france : ["../image/France1.jpg","../image/France2.jpg","../image/France3.jpg","../image/France4.jpg"],
    hongkong : ["../image/Hongkong1.jpg","../image/Hongkong2.jpg","../image/Hongkong3.jpg","../image/Hongkong4.jpg"],
    UK : ["../image/London1.jpg","../image/London2.jpg","../image/London3.jpg","../image/London4.jpg"],
    singapore : ["../image/Singapore1.jpg","../image/Singapore2.jpg","../image/Singapore3.jpg","../image/Singapore4.jpg"],
    taiwan : ["../image/Taiwan1.jpg","../image/Taiwan2.jpg","../image/Taiwan3.jpg","../image/Taiwan4.jpg"],
    hungary : ["../image/hungary1.jpg","../image/hungary2.jpg","../image/hungary3.jpg","../image/hungary4.jpg"],
}
document.querySelector("#france").onclick=(e)=>{events(e.target); test(contries.france);};
document.querySelector("#UK").onclick=(e)=>{test(contries.UK); events(e.target);};
document.querySelector("#hungary").onclick=(e)=>{test(contries.hungary); events(e.target);};
document.querySelector("#czech").onclick=(e)=>{test(contries.czech); events(e.target);};
document.querySelector("#australia").onclick=(e)=>{test(contries.australia); events(e.target);};
document.querySelector("#hongkong").onclick=(e)=>{test(contries.hongkong); events(e.target);};
document.querySelector("#singapore").onclick=(e)=>{test(contries.singapore); events(e.target);};
document.querySelector("#taiwan").onclick=(e)=>{test(contries.taiwan); events(e.target);};

document.querySelector("#popupClose").onclick=(e)=> {
    document.querySelector("#popup").style.display = "none";
    const folderimg = document.querySelectorAll(".folderImg");
    for(folder of folderimg)
        folder.src="../image/folderWhite.png";
}

const events = (e) =>{
    document.querySelector("#popup").style.display = "block";
    e.src = "../image/folderPurple.png"
    document.querySelector("#travelTitle").style.color = "#ede6f6";
    document.querySelector("#travelMain img").style.opacity = "1";
};

const test = (country) => {
    document.querySelector("#right").style.display = "block";  
    document.querySelector("#left").style.display = "none"; 
    const loadImg = document.querySelector("#selectedImg");
    let index = 0;           
    loadImg.src= country[0];
    
    document.querySelector("#left").onclick=(e)=>{
        if(index != 0)
            loadImg.src= country[--index];
        if(index == 0)
            e.target.style.display = "none";
        if(index != 3)
            document.querySelector("#right").style.display = "block";     
    };
    document.querySelector("#right").onclick=(e)=>{
        if(index != 3)
            loadImg.src= country[++index];            
        if(index == 3)
            e.target.style.display = "none";                
        if(index >= 1)
            document.querySelector("#left").style.display = "block";       
            console.log(index);         
    };
}   
