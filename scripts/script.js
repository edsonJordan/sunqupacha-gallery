import {Random} from "./random.js"
const rNum =  new Random();

const setLikes=(data)=>{
  /* {id:1, photo: "img/1"}, {id:2, photo: "img/2"}, {id:3, photo: "img/3"} */
  const readLikes= JSON.parse(localStorage.getItem('Likes'));      
  console.log(data);
  
  /* if(!readLocal){
      localStorage.setItem('Likes', JSON.stringify(data));
  }else{        
      readLocal[readLocal.length]=data[0];        
      localStorage.setItem('Likes', JSON.stringify(readLocal));
  } */
}






const getImage = () =>{     
    let pagRandom= Math.round(Math.random()*(34-1)+1);    
    /* ${pagRandom} */    
    const pag = [];
    if(rNum.getnumber().indexOf(pagRandom) == -1){      
      rNum.setnumber(pagRandom)                              /* ${pagRandom} */    
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
      .then(res=> res.json())
      .then(res => {
        const image = document.getElementById('gallery__photo');                                             
        const fragment = document.createDocumentFragment();
        const likes =JSON.parse(localStorage.getItem("Likes"))
        if(!likes){
          for(const data of res.results){                    
            const newImage = document.createElement('img')
               newImage.setAttribute('src', data.image)
               newImage.setAttribute('name', data.name)
               newImage.setAttribute('species', data.species)            
               newImage.setAttribute('gender', data.gender)
               newImage.setAttribute('status', data.status)
               newImage.setAttribute('id', data.id)
               newImage.classList.add('img_photo')
               fragment.appendChild(newImage)                             
            } 
        }else{
          for(const data of res.results){                    
            const newImage = document.createElement('img')
               newImage.setAttribute('src', data.image)
               newImage.setAttribute('name', data.name)
               newImage.setAttribute('species', data.species)
               for (const iterator of likes) {
                  if(iterator.id == data.id){
              newImage.classList.add("img_like");
                    break;
                  }               
               }            
               newImage.setAttribute('gender', data.gender)
               newImage.setAttribute('status', data.status)
               newImage.setAttribute('id', data.id)
               newImage.classList.add('img_photo')
               fragment.appendChild(newImage)                             
            }

        }
                                                 
                                                                     
            image?.appendChild(fragment)
            //setScroll(image); 
            scroll();                     
        }) 

        
    }else{
    /* content because repeat  */       
    }                                            
        }
      getImage()    
      /* const callback = (entries) =>{      
        for (const data of entries) {
            if(data.isIntersecting){
              getImage()
              }       
            }
          
      } */
      const scroll=() =>{
          window.onscroll = function (){
            // Obtenemos la posicion del scroll en pantall
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              getImage()
            }
        }

      }
      
/* const setScroll = (image) =>{
      const pOption ={
           threshold: 0.99
      }
      const scroll = new IntersectionObserver(callback, pOption);
      scroll.observe(image.lastElementChild);
} */
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
      /* Double click */           
      touch++     
      if(touch == 1){        
      var time = setTimeout(function(){ touch=0}, 400); 
      return         
      }            
      if(e.target.nodeName == "IMG"){

        const midScreen = Math.round((screen.height + 131)/2);            
        if(midScreen > e.screenY){
          //console.log("Estas tocando de la mitad para arriba");       
        }else{
          //console.log("Estas tocando de la mitad para abajo");       
        } 
        /* toggle and location core and animation */
        const nLike=document.getElementById("gallery__likes");
        nLike.classList.toggle('true')                                                                                    
        const likes =JSON.parse(localStorage.getItem("Likes"))                        
          let search = false;                              
        if(likes && likes.length > 0  ){                                   
              for (const iterator of likes) {                                                    
                  if(e.target.id === iterator.id){
                    search = true;                    
                    break;
                  }        
              }                                                                      
          }        
          else{
            localStorage.setItem('Likes', JSON.stringify([{id :e.target.id , photo: e.target.name}]));            
            
          }                     
          searchLike(search, e.target, likes, e.pageX, e.pageY);                           
          if(search){
              for (const iterator of likes) {
                if(iterator.id == e.target.id){
                  /* dataLocal.splice(dataLocal.indexOf(iterator), 1);   */                                      
                    likes.splice(likes.indexOf(iterator), 1);  
                    localStorage.setItem('Likes', JSON.stringify(likes));                                    
                    break
                }
                // deslike animation(e.pageX, e.pageY);    
              }
              outpLike(e.target.id)        
              console.log("deslikes");
                              
          }                                                                                     
      }                  
    })
    const searchLike =(Boolean , event, likes, pageX, pageY) =>{            
      if(likes == null){
        likes = [];
      }
      if(!Boolean){                
        likes[likes.length]={id :event.id , photo: event.name};
        localStorage.setItem('Likes', JSON.stringify(likes))
        paintLike(event.id)          
        animation(pageX, pageY);                                         
      }
    }
    const paintLike = (id)=>{
      let imgSelect = document.getElementById(id);                
      imgSelect?.classList.add("img_like");        
    }
    const outpLike = (id) =>{
      let imgSelect = document.getElementById(id);                
      imgSelect?.classList.remove("img_like");       
    }
    const animation = (pageX, pageY)=>{
      const cora = document.getElementById("cora"); 
      cora?.classList.toggle('none')     
      cora.style.left =JSON.stringify((pageX)-25) + "px";                                              
        cora.style.top = JSON.stringify((pageY)-25) + "px";  
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
    }
    
  