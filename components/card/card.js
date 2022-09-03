 const card = (obj) =>{

  // Capturing type of the Pokemon to add the type icon(s).
 const stringVal = imgTypeSelector(obj.types);

    const divTag = document.createElement("div");

    divTag.innerHTML = `
    
    <div class="card rounded my-4 col-6">
    <div class="img col-12">
      <img
        src="${obj.dreamWorld_img}"
        alt="${obj.name}"
        class="poke-img card-img-top"
      />
    </div>
    <div class="info col-12 ">
        
      <div class="poke-name jusify-content-start col-12 p-2 text-bg-dark text-uppercase">
      ${obj.name}
      </div>
      <div class="type col-12 p-1">
        <div class="img-container">
          ${stringVal}
        </div>
     
    </div>
    </div>
  </div>
    `



    divTag.classList.add("po-card");
    document.getElementsByClassName("main-container")[0].append(divTag);

//  `
//     <div class="card rounded my-4 col-6">
//     <div class="img col-12">
//       <img
//         src="${obj.dreamWorld_img}"
//         alt="${obj.name}"
//         class="poke-img card-img-top"
//       />
//     </div>
//     <div class="info col-12 ">
        
//       <div class="poke-name jusify-content-start col-12 p-2 text-bg-dark text-uppercase">
//       ${obj.name}
//       </div>
//       <div class="type col-12 p-1">
//         <div class="img-container">
//           <img
//             src="./assets/images/type/bug.svg"
//             alt="Type ${obj.types[0].type.name}"
//             class="type-img"
//           />
//         </div>
     
//     </div>
//     </div>
//   </div>`


 }

 const imgTypeSelector = (typeArr) =>{
  let stringVal = "";
    typeArr.map((typeObj)=>{
     stringVal = `${stringVal}
      <div class="type-box"> 
      <img
        src="./assets/images/type/${typeObj.type.name}.svg"
        alt="Type ${typeObj.type.name}"
        class="type-img"
      />
      </div>

 
      `
    })
    return stringVal;

 }

//  card();

export default card;