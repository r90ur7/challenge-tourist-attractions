export class Formulario {
    constructor(){
        this.files = []
        this.selectors();
        this.Picture();
    }
    selectors(){
        this.inputFile = document.querySelector(".Image");
        this.SpanFile = document.querySelector(".PictureCap");
        this.Placeholdertext = "Imagem 🤓";
        this.SpanFile.innerHTML = Placeholdertext;
    }
    Picture() {
        this.inputFile.addEventListener("change",function(e){
            const inputTarget =e.target;
            const file = inputTarget.files[0];

            if (file){
            const reader  = new FileReader();

            reader.addEventListener("load",function(e){
                const readerTarget = e.target;

                const img =document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add("PictureCap");


                this.SpanFile.innerHTML = ""
                this.SpanFile.appendChild(img)

            });
            reader.readAsDataURL(file);
        }
        else{
            this.Placeholdertext.innerHTML =this.Placeholdertext;
        }
        })
    }
}