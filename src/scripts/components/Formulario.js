export class Formulario{
    constructor(){
        this.file = [
            {   Title: "Pão de Açúcar",
                Description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
                Image:"./img/image-item-list-Pão-de-açucar.jpg"
            },
            {   Title: "Cristor Redentor",
                Description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
                Image:"./img/image-item-list-Cristo_Redentor.jpg"
            },
            {   Title: "Ilha Grande",
                Description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
                Image:"./img/image-item-list-ilha_Grande.jpg"
            },
            {   Title: "Centro Histórico de Paraty",
                Description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
                Image:"./img/image-item-list-Centro_historico.jpg"
            }
        ];
        this.selectors();
        this.events();
        this.adcionarSlick();
        this.RenderToSlick();
        this.start();
    }
    selectors(){
        this.form = document.querySelector('.FormConteiner');
        this.wth = window.screen.width;
        this.Titulo = document.querySelector(".input-titulo");
        this.Description = document.querySelector(".input-descricao");
        this.Cards = document.querySelector('.Slicklist');
        this.pictureImage = document.querySelector(".PictureCap");
        this.pictureImageTxt = "Imagem";
        this.pictureImage.innerHTML = this.pictureImageTxt;
        this.ativado =console.log("Preview ativado");
        this.reader = new FileReader();
        this.inputFile = document.querySelector(".input-image");
    }
    events(){
        this.form.addEventListener("submit",this.addToSlick.bind(this));
        this.form.addEventListener("submit",this.start.bind(this));
        this.inputFile.addEventListener("change",this.Reader.bind(this));
        window.addEventListener('resize', this.start.bind(this));
    }
    addToSlick(even){
        even.preventDefault();
        const Title_Name = even.target["Título"].value;
        const Descr_Name = even.target["descr"].value;
        const img_Name = this.pictureImage.children[0].src;
        console.log(Title_Name, Descr_Name,img_Name);
        if(Title_Name != "" && Descr_Name != "" && img_Name != ""){
            const card = {
                Title: Title_Name,
                Description : Descr_Name,
                Image: img_Name,
            }
            this.file.push(card);
            this.RenderToSlick();
            this.reset();
            this.start();
        }
    }
    RenderToSlick(){
        let SlickStructure = ""
        this.file.forEach(function(card){
            SlickStructure += `
            <li class="container-item-list">
                        <figure class="SlickImageItem">
                            <img data-test="image-item-list" class="image-item" type="image"
                                src="${card.Image}"
                                alt="Ponto Turístico" placeholder="Imagem"
                                disabled
                                />
                            <div class="card-text">
                                <h2 class="title-item-list">${card.Title}</h2>
                                <figcaption class="description-item-list">${card.Description}</figcaption>
                            </div>
                        </figure>
                    </li>
            `
        });
        if(this.wth > 1024){
            this.removerslick();
            this.Cards.innerHTML = SlickStructure;
            this.adcionarSlick();
        }else{
            this.Cards.innerHTML = SlickStructure;
        }
        console.log(this.Cards,"Chegou no final do render")
    }
    reset(){
        this.Titulo.value = "";
        this.Description.value = "";
        this.pictureImage.innerHTML = this.pictureImageTxt;
    }
    removerslick(){
            console.log('Removendo slick');
            $('.slick').slick('unslick');
        }
    adcionarSlick(){
            console.log('adicionando slick');
            $('.slick').slick({
                dots:true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                variableWidth:true,
                prevArrow: $(".Fakebutton-Prev"),
                nextArrow: $(".Fakebutton-Next"),
                responsive:[{
                        breakpoint: 1024,
                        settings: 'unslick',
                    }],
                });
    }
    Reader(even){
        // console.log("cheguei no reader")
        const inputTarget = even.target;
        // console.log(inputTarget,"cheguei no InputTarget")
        const file = inputTarget.files[0];
        // console.log("cheguei no file \n",file);

        if(file){
            // console.log("cheguei no if")
            // console.log(this.pictureImage)
            // console.log("executei o reader \n",this.reader);
            this.reader.addEventListener("load",(e)=>{
                this.pictureImage = document.querySelector(".PictureCap");
                // console.log("Estou lendo o reader")
                const readerTarget = e.target;
                // console.log(readerTarget)
                let img = document.createElement("img");
                img.src = readerTarget.result;
                console.log(img.src)
                img.classList.add("picture__img");
                // console.log(img)
                // console.log("eu li o reader")
                // console.log(this.pictureImage)
                this.pictureImage.innerHTML = "";
                this.pictureImage.appendChild(img);
            });
            this.reader.readAsDataURL(file);
            even.target.value = ""
        }else{
            // console.log("Não li file nenhum")
            this.pictureImage.innerHTML = this.pictureImageTxt;
            // console.log(this.pictureImage)
        }
    }
    start(){
        console.log(window.screen.width)
        console.log("ativei")
        if(window.screen.width > 1024){
            console.log("estou no 1024")
            this.adcionarSlick();
        }else{
            console.log("estou no unslick")
            $('.slick').slick('unslick');
        }
    }
}