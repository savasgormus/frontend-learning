const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtButton = document.querySelector("#submit");

window.addEventListener("load", () =>{      //! 91
    mail.value = "eve.holt@reqres.in";
    password.value = "pistol";
});

sbmtButton.addEventListener("click", e=>{   //! 93
    postCustomerRegister();

})


const postCustomerRegister = async() =>{       //! 93
    // alert("customer data sent!")
    const bodyData = {                         //! 95
        email:mail.value,
        password:password.value,
    };
    console.log(bodyData);

    try {                                      //! 97
        showLoading();
        const response = await axios({
            url: "https://reqres.in/api/register",
            method: "post",
            data: bodyData,
        });
        const {data:userData} = response
        console.log(response);
        if(userData.token == undefined){
            alert("undefined");
            removeLoading();
        } else {    //! 110
            localStorage.setItem("baseUrl", "https://reqres.in");
            localStorage.setItem("apiKey", EncryptStringAES(userData.token));
            removeLoading();  
            window.location.href = "userList.html";
        }
    } catch (error) {
        alert(error)
    }
}