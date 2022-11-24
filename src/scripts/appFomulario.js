document.addEventListener("DOMContentLoaded",function(){
    const file = [];

    const form = document.querySelector('.FormConteiner');
    const slick = document.querySelector(".WrapperSlickConteiner")
    const Titulo = document.querySelector(".item-title");
    const Description = document.querySelector(".item-desc");
    const inputFile = document.querySelector(".Image");
    const pictureImage = document.querySelector(".PictureCap");
    const pictureImageTxt = "Imagem";
    const Cards = document.querySelector(".Slicklkist");


    pictureImage.innerHTML = pictureImageTxt;
    form.addEventListener("submit",addToSlick);
    form.addEventListener("submit",addToSlick);

    function addToSlick(even){
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
            file.push(card);
            RenderToSlick();
            reset();
        }
    }
    function RenderToSlick(){
        let SlickStructure = ""
        file.forEach(function(card){
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
        Cards.innerHTML = SlickStructure;
    }
    function reset(){
        Titulo.value = "";
        Description.value = "";
        pictureImage.innerHTML = pictureImageTxt;
    }
    });