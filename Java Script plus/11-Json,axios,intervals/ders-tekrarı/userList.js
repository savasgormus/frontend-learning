const tbody = document.getElementById('tbodyUserList');


window.onload = () =>{
    getApiUserList();
    // setInterval(getApiUserList, 5000);
}

const getApiUserList = async () => {
    showLoading();
    // axios
    try {
        // const responseData = await axios("https://reqres.in/api/users?page=1");
        const responseData = await axios({
            url: "https://reqres.in/api/users?page=1",
            method: "get",
            // method: "post";
            // data:bodyDate
        });
        // console.log(responseData);
        const { data: userListArray } = responseData.data;  // destruction
        console.log(userListArray);
        if(userListArray.lenght === 0){
            alert("userlist not found");
            removeLoading()
        } 
        else {
            tbody.innerHTML = "";
            userListArray.forEach(customer => {
                tbody.innerHTML += `
                <tr>
                <td>
					${customer.id}
                </td>
                <td>
					<img src= "${customer.avatar}">
                </td>
                <td>
                ${customer.email}
                </td>
                <td>
                ${customer.first_name}
                </td>
                <td>
                ${customer.last_name}
                </td>
            </tr>
                `
            removeLoading();
            })
        }
    } 
    catch (error) {
        alert(error);
        // send errors to api and database
        // postErrorLog("userlist","getApiUserList",error);
        removeLoading();
    }
}


