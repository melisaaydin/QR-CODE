let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText")
let button = document.getElementById("button");
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
qrText.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        generateQR();

    }
})
button.addEventListener("click", function () {
    button.textContent = "Download";


})

