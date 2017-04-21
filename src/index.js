import '../style/componentStyles.scss';
class  narilearsi{
  constructor(){
    //this.imprime = this.imprime.bind(this);
  }
  imprime(){
    return 'entro a mi funcion';
  }
}



// var temp = new _$();
window._$ = new narilearsi();




// let init = ()=>{



//   const Thomas = this;
//   if(document.getElementById('content')){
//     let heightContent = document.getElementById('content').clientHeight;
//     addHeightToClassItems('sides',heightContent,"wrap-items center sides");

//     let items = getItemsByClass('card');
//     items.map((item)=>{
//       console.dir(item);
//       item.onmouseenter = mouseOver;
//       item.onmouseleave = mouseLeave;
//     });
//   }
//   if(document.getElementById('section1-info') && document.documentElement.clientWidth > 766){
//     let heightContent = document.getElementById('section1-info').clientHeight;
//     addHeightToClassItems('section1-icon',heightContent);
//   }else{
//     addHeightToClassItems('section1-icon','auto');
//   }

//   if(document.getElementById('section2-info') && document.documentElement.clientWidth > 766){
//     let heightContent = document.getElementById('section2-info').clientHeight;
//     addHeightToClassItems('section2-icon',heightContent);
//   }else{
//     addHeightToClassItems('section2-icon','auto');
//   }

//   if(document.getElementById('section3-info') && document.documentElement.clientWidth > 766){
//     let heightContent = document.getElementById('section3-info').clientHeight;
//     addHeightToClassItems('section3-icon',heightContent);
//   }else{
//     addHeightToClassItems('section3-icon','auto');
//   }

//   //inicializacion de radio buttons en toda la aplicacion
//   let radioItems = []; //getItemsByClass('wrap-input radio');
//   if(radioItems.length>0){
//     radioItems.map((item,index)=>{
//       //console.dir(item);
//       if(item.children.length > 0){
//         //console.dir(getChildren(item.children));
//         let input = null;
//         let label = null;
//         getChildren(item.children).map((child,id)=>{

//           if(child.tagName == "INPUT"){
//             input = child;
//           }else if(child.tagName == "LABEL"){
//             label = child;
//           }
//         });
//         console.dir(input);
//         console.dir(label);
//         if((input && label) && (input.parentElement.className ==  label.parentElement.className)){
//           label.onClick = ()=>{
//             input.checked = !input.checked;
//             console.log(input.checked);
//           }
//         }else{
//           console.log('no hay');
//         }
//       }
//     });
//   }
//   // radio inputs


// }

// let addHeightToClassItems = (i,h,c=null)=>{
//   let items = getItemsByClass(i);
//   items.map((item)=>{
//     if(h!="auto"){
//       item.style.height = h+"px";
//     }else{
//       item.style.height = "auto";
//     }
//     if(c){// si se le agregan clases los setea al div
//       item.className = c;
//     }
//   })
// }

// let getChildren = (elem)=>{
//   let sides = elem;
//   let items = [];
//   for(var i = 0; i < sides.length; i++)
//   {
//     items.push(sides.item(i));
//   }
//   return items;
// }


// let getItemsByClass = (selector)=>{
//   let sides = document.getElementsByClassName(selector);
//   let items = [];
//   for(var i = 0; i < sides.length; i++)
//   {
//     items.push(sides.item(i));
//   }
//   return items;
// }
// let mouseOver = (e)=>{
//   console.log(e.target);
//   // console.log(e.target);
//    e.target.className ="wrap-items wrap-items-column center white card active";
//   // let items = getItemsByClass('card-bg');
//   // items.map((item)=>{
//   //   item.className ="card-bg active";
//   // });
// }
// let mouseLeave = (e)=>{

//   // console.log(e.target.className);
//    e.target.className ="wrap-items wrap-items-column center white card";
//   // let items = getItemsByClass('card-bg');
//   // items.map((item)=>{
//   //   item.className = "card-bg";
//   // });
// }




// //window.addEventListener('mouseover',mouseOver);

// window.addEventListener("resize",init);
// window.addEventListener("load", init);
