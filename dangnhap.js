
function kiemtra() {
    let username = document.getElementById("username").value
    console.log("đang kiểm tra")
    if (username == "Admin") {
        let password = prompt("Hãy nhập mật khẩu")
        if (password == "TheMaster") {
            alert("Welcome")
        }
    }
}