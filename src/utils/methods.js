export function checkDataEqual(arr1, arr2) {
    
    if (!arr1|| !arr2) {
      return
    }

    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      const obj1 = arr1[i];
      const obj2 = arr2[i];
  
      for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  
    return true;
}


export const checkPage = (arr, id) => {

    const isPage = arr.some(el => {
        return el.id === id;
    });

    return isPage;
}


export function hasEmpty(obj) {  

  for (let key in obj) {
    
    if (obj.hasOwnProperty(key) && obj[key] === "") {

      return true;
    }
  }
  return false;  
  
}


export function formatSize(str) {  
  let size = "";

  if(str.toLowerCase() === "s"){
    size = "Small";
  }
  if(str.toLowerCase() === "m"){
    size = "Medium";
  }
  if(str.toLowerCase() === "l"){
    size = "Large";
  }
  if(str.toLowerCase() === "xl"){
    size = "Extra-Large";
  }

  return size;
  
}


export const returnPack2Images = (num, color, otherImages) => {

  if(num === "3"){
      return otherImages[0]["pack-3"];

  }else{

      if(num === "2" && color.toLowerCase() === "black/grey"){
          return otherImages[0]["pack-2"]["black/grey"];
          // console.log(otherImages[0]["pack-2"]["black/grey"]);
      }else if (num === "2" && color.toLowerCase() === "black/white"){
          return otherImages[0]["pack-2"]["black/white"];
          // console.log(otherImages[0]["pack-2"]["black/white"]);

      }
      else if (num === "2" && color.toLowerCase() === "white/grey"){
          return otherImages[0]["pack-2"]["white/grey"];
          // console.log(otherImages[0]["pack-2"]["white/grey"]);

      }else{
          // console.log(otherImages[0]["pack-2"]["white/white"]);
          return otherImages[0]["pack-2"]["white/white"];
          // console.log("none", itemColor);
      }

  }



}