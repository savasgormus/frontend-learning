const tbody = document.getElementById('tbodyUserList');

window.onload = () => {
    getApiUserList();                        //! 19
}

const getApiUserList = async() =>{               //! 36 - 37
    showLoading();
    //axios
    try {                                      //! 41
        const responseData = await axios("https://reqres.in/api/users?page=2")
        console.log(responseData);
        const { data: userListArray } = responseData.data;             //! 40
        console.log(userListArray);
        removeLoading();
    } catch (error) {                         //!41
        alert(error);
        //send error to api and database (errorLogs table)
        // postErrorLog("userList", "getApiUserlist", error);
        removeLoading();
    }







}
