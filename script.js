const autoAdd = () =>{  
    fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
        .then(res=> res.json())
        .then(res => {           
          const image = document.getElementById('gallery__photo');                                             
          const fragment = document.createDocumentFragment();                            
          for(const data of res.results){
           const newImage = document.createElement('img')
              newImage.setAttribute('src', data.image)
              newImage.classList.add('img_photo')
              fragment.appendChild(newImage)                             
                }                                                                
              image?.appendChild(fragment)            
          })                      
        }
    autoAdd()
    const gallery = document.getElementById('gallery__photo');
    gallery?.addEventListener('click touchend', (e)=>{
    /*   if(e.targetTouches.length === 2){          
          alert("dobletouch")
      } */
      console.log(e);
      
    })             
  