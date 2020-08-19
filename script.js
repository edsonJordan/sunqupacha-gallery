import {Random} from '/random.js';
const rNum =  new Random();


const getImage = () =>{  
    let pagRandom= Math.round(Math.random()*(34-1)+1);    
    /* ${pagRandom} */    
    const pag = [];
    if(rNum.getnumber().indexOf(pagRandom) == -1){      
      rNum.setnumber(pagRandom)                                  
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
      .then(res=> res.json())
      .then(res => {
        const image = document.getElementById('gallery__photo');                                             
        const fragment = document.createDocumentFragment();                            
        for(const data of res.results){
         const newImage = document.createElement('img')
            newImage.setAttribute('src', data.image)
            newImage.setAttribute('id', data.id)
            newImage.classList.add('img_photo')
            fragment.appendChild(newImage)                             
              }                                                                
            image?.appendChild(fragment)
            setScroll(image);                      
        }) 
      
    }else{
    /* content because repeat  */       
    }                                            
          
        }
      getImage()    
      const callback = (entries) =>{      
        for (const data of entries) {
            if(data.isIntersecting){
              getImage()
              }       
            }
          //console.log(entries);
      }
const setScroll = (image) =>{
      const pOption ={
           threshold: 0.99
      }
      const scroll = new IntersectionObserver(callback, pOption);
      scroll.observe(image.lastElementChild);
}
    /* End animation */
    const cora = document.getElementById("cora"); 
    cora?.addEventListener('animationend', (e)=> {      
      cora.classList.add("none");     
      cora.style.animation ='';
    })    
    /* Animation */
    let touch=0;      
    const gallery = document.getElementById('gallery__photo');
    gallery?.addEventListener('mousemove', (e)=>{
      
    })
    gallery?.addEventListener('click', (e)=>{           
      touch++     
      if(touch == 1){        
      var time = setTimeout(function(){ touch=0}, 400);          
      }else {                     
        const cora = document.getElementById("cora"); 
        let thRandom= Math.round(Math.random()*(3-1)+1);
        switch (thRandom) {
          case 1:
            cora.style.animation ='throb-left .6s';
            break;
          case 2:
            cora.style.animation ='throb-center .6s';
            break;
          case 3:
            cora.style.animation ='throb-right .6s';
            break;         
        }
          //console.log(e.target.nodeName);
            if(e.target.nodeName == "IMG"){
              let imgSelect = document.getElementById(e.target.id);
              imgSelect?.classList.toggle("img_like");
            }            
            cora?.classList.toggle('none')               
            cora.style.left =JSON.stringify((e.pageX)-25) + "px";                                              
            cora.style.top = JSON.stringify((e.pageY)-25) + "px";                                              
            }                   
    })
    
  