
function kiemtra() {
    let username = document.getElementById("username").value
    console.log("đang kiểm tra")
    if (username == "Admin") {
        let password = prompt("Hãy nhập mật khẩu")
        if (password == "TheMaster") {
            alert("Welcome")
        }
        else if (password == "") {
            alert("Canceled")
        }
        else {
            alert("Wrong password")
        }
    }
    else if (username == "") {
        alert("Canceled")
    }
    else {
        alert("I don't know you!")
    }
}