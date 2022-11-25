export class preview{
    constructor(){

        this.selectors();
        this.print();
        this.events();

    }
    selectors(){
        this.inputfile = document.querySelector(".Image");
        this.pictureImage  = document.querySelector(".PictureCap");
        this.pictureImageTxt  = "Image";
        this.pictureImage.innerHTML = this.pictureImageTxt;
        this.reader  = new FileReader();
    }
    print(){
        console.log("estou ativado");
        console.log(this.pictureImage.innerHTML);
    }
    events(){
        this.inputfile.addEventListener('change',this.Input.bind(this));
    }

    Input(e){
        const file = e.target.files[0]
        console.log(file,"target");
        if(file){
            console.log(file);
            console.log(this.reader)
            this.reader.addEventListener("load", function (e) {
                this.reader.result
                const img = document.createElement("img");
                img.src = this.reader.result;
                img.classList.add("picture__img");

                this.pictureImage.innerHTML = "";
                this.pictureImage.appendChild(img);
            });

            this.reader.readAsDataURL(file)
        }
        else{
            this.pictureImage.innerHTML = this.pictureImageTxt;
        }
    }
}