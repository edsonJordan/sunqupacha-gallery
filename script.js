
const autoAdd = () =>{
  
    fetch('https://rickandmortyapi.com/api/character/?page=3')
        .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
        .then(res=> res.json())
        .then(res => {           
          const image = document.getElementById('gallery__photo');                                             
          const fragment = document.createDocumentFragment();                            
          for(const data of res.results){
           const newImage = document.createElement('img')
              newImage.setAttribute('src', data.image)
              fragment.appendChild(newImage)                             
            }                                                                
            image?.appendChild(fragment)            
          })
          
            

        }     
/* 
  .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        }) */

          /*   res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
           */        
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
      
    
    autoAdd()