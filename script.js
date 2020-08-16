
const autoAdd = () =>{

    fetch('https://rickandmortyapi.com/api/character/?page=19')
        .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
        .then(res=> res.json())
        .then(res => console.log(res)          
          /*   const phot= document.getElementById('gallery__photo');            
            const fragment = document.createDocumentFragment();
                for(const data of res){
                const content = document.createElement('DIV');
                const img = document.createElement('IMG');
                                                
                content.classList.add("div_photo")
                img.classList.add("img_photo");
                img.src= element.
                 const contList = document.createElement('UL');                
                const listItem = document.createElement('LI'); 

                content.classList.add("card");
                 contList.classList.add("card__ul");
                listItem.classList.add("card__li");                 
                console.log(res) } */                                         
        )        
    }
    autoAdd()