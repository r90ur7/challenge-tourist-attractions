export class preview{
    constructor(){
        this.selectors();
        this.events();
    }
    selectors(){
        this.ativado =console.log("Preview ativado");
        this.reader = new FileReader();
        this.inputFile = document.querySelector(".input-image");
        this.pictureImage = document.querySelector(".PictureCap");
        this.pictureImageTxt = "Imagem";
        this.pictureImage.innerHTML = this.pictureImageTxt;
    }
    events(){
        this.inputFile.addEventListener("change",this.Reader.bind(this));
    }

    Reader(even){
        console.log("cheguei no reader")
        const inputTarget = even.target;
        console.log(inputTarget,"cheguei no InputTarget")
        const file = inputTarget.files[0];
        console.log("cheguei no file \n",file);

        if(file){
            console.log("cheguei no if")
            console.log(this.pictureImage)
            console.log("executei o reader \n",this.reader);
            this.reader.addEventListener("load",this.Load.bind(this));
            this.reader.readAsDataURL(file);
        }else{
            console.log("Não li file nenhum")
            this.pictureImage.innerHTML = this.pictureImageTxt;
            console.log(this.pictureImage)
        }
    }
    Load(e){
            this.pictureImage = document.querySelector(".PictureCap");
            console.log("Estou lendo o reader")
            const readerTarget = e.target;
            console.log(readerTarget)
            const img = document.createElement("img");
            img.src = readerTarget.result;
            console.log(img.src)
            img.classList.add("picture__img");
            console.log(img)
            console.log("eu li o reader")
            console.log(this.pictureImage)
            this.pictureImage.innerHTML = "";
            this.pictureImage.appendChild(img);
        }
    }