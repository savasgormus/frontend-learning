const tbody = document.getElementById('tbodyUserList');

window.onload = () => {
    getApiUserList();                               //! 19
    setInterval(getApiUserList,10000)            //! 71
}

const getApiUserList = async() =>{                  //! 36 - 37
    showLoading();
    //axios
    try {                                           //! 41
        // const responseData = await axios("https://reqres.in/api/users?page=2")
        const responseData = await axios({          //!76
            url: "https://reqres.in/api/users?page=2",
            method: "get",
            // data: bodyData,
        })
        
        
        console.log(responseData);
        const { data: userListArray } = responseData.data;             //! 40
        console.log(userListArray);
        if(userListArray.lenght === 0) {                 //! 42
            alert("userlist not found");
            removeLoading();
        } 
        else {
            tbody.innerHTML = "";      //! 74
            userListArray.forEach(customer => {    //! 43
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
            });
            removeLoading();
        }
    } catch (error) {                         //!41
        alert(error);
        //send error to api and database (errorLogs table)
        // postErrorLog("userList", "getApiUserlist", error);
        removeLoading();
    }
}
