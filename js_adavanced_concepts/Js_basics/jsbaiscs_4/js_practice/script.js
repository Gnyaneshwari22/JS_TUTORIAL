const array=[
    {
    id:1,
    name:"gnyan",
    place:"bang",
    college:"BMS",
    isactive:false,
  },
  {
    id:2,
    name:"shree",
    place:"bang",
    college:"BMS",
    isactive:false,
  },
  {
    id:3,
    name:"raju",
    place:"bangalore",
    college:"BMS67",
    isactive:true,
  },
  {
    id:4,
    name:"ramu",
    place:"bang",
    college:"BMSlm",
    isactive:true,
  },
  {
    id:5,
    name:"shayam",
    place:"eeee",
    college:"BMSce",
  }
]

const newarray=[];
// for (let i=0;i<array.length;i++){
//     newarray.push(array[i].name);trash:///top-course-starter
// }

// console.log(newarray);

// array.forEach((elemnet) => {
//     // newarray.push(elemnet.name);
//     if(elemnet.isactive){
//     newarray.push(elemnet.name);
//     }
// })

//  console.log(newarray);

 //MAP METHOD

 const maparray=array.filter((users) => {
   return (users.id==1) || (users.isactive)}).map((users) => users.name);   //op :: [gnyan,raju,ramu]

 console.log(maparray);
