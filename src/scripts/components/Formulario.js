export class Formulario{
    constructor(){
        this.file = [];

        this.selectors();
        this.events();
    }
    selectors(){
        this.form = document.querySelector('.FormConteiner');
        this.slick = document.querySelector(".WrapperSlickConteiner")
        this.Titulo = document.querySelector(".input-titulo");
        this.Description = document.querySelector(".input-descricao");
        this.Cards = document.querySelector(".Slicklist");
    }
    events(){
        this.form.addEventListener("submit",this.addToSlick.bind(this));
    }

    addToSlick(even){
        even.preventDefault();
        const Title_Name = even.target["Título"].value;
        const Descr_Name = even.target["descr"].value;
        const img_Name = even.target["Image"].value;
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
        }
    }
    RenderToSlick(){
        let SlickStructure = ""
        this.file.forEach(function(card){
            SlickStructure += `
            <figure class="SlickImageItem">
                    <img class="image-item" type="image"
                        src="${card.Image}"
                        alt="Ponto Turístico" placeholder="Imagem" disabled
                        />
                    <h2  class="title_item">${card.Title}</h2>
                    <figcaption>${card.Description}</figcaption>
            </figure>
            `
        });
        this.Cards.innerHTML = SlickStructure;
    }
    reset(){
        this.Titulo.value = "";
        this.Description.value = "";
        // this.pictureImage.innerHTML = this.pictureImageTxt;
    }

}
export const slick ={
}