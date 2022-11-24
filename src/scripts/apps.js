document.addEventListener("DOMContentLoaded",function() {
    // new Formulario();
    const inputFile = document.querySelector(".Image");
    const pictureImage = document.querySelector(".PictureCap");
    const pictureImageTxt = "Imagem";
    pictureImage.innerHTML = pictureImageTxt;

    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
        const readerTarget = e.target;

        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img");

        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
    });
});