
const loadGuestbook = () => {
        const tbody = document.querySelector("#tblUserList tbody");
        const userList = JSON.parse(localStorage.getItem('userList'));               
        tbody.innerHTML = '';
        for(let i = 0; i <userList.length ; i++){
            tbody.innerHTML += `<tr><td>${i+1}</td>
                <td>${userList[i].userId}</td>
                <td>${userList[i].userName}</td>
                <td>${userList[i].userEmail}</td>
                <td>${userList[i].phone}</td></tr>`;
        }
};
loadGuestbook(); 
