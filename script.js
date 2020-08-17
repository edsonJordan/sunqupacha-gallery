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
    let touch=0;  
    const gallery = document.getElementById('gallery__photo');
    gallery?.addEventListener('click', (e)=>{            
      touch++     
      if(touch == 1){        
      var time = setTimeout(function(){ touch=0}, 400);          
      }else {              
        const cora = document.getElementById("cora");
        
        cora.style.left =JSON.stringify(e.pageX) + "px";                                              
        cora.style.top = JSON.stringify(e.pageY) + "px";                                              
    }           
        
    })
    
  