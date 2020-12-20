//const axios = require("axios");
const BaseURL = 'http://10.0.2.2:3001'



const getData = async (url) => {
     
    console.log(`${BaseURL}/${url}`)
    try {
        const response = await fetch(`${BaseURL}/${url}`);
      //  alert(1)
        const result = await response.json();
      //  alert(result);
        return result;
    } catch (e) {
        alert(e)
        console.log(url, e)
    }
}


const postData = async (url, body) => {
    console.log(`${BaseURL}/${url}`, body);
    try {
        const response = await fetch(`${BaseURL}/${url}`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json; charset=utf-8"
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(body)
          });
          const result = await response.json();
          return result;
    } catch (e) {
        console.log(url, e)
    }
}

 



// const postDataAndImage =async(url, formData,config)=> {
//     console.log(url, formData);
//   try {
//      var response = await axios.post(`${BaseURL}/${url}`,formData,config)
//       //alert("The file is successfully uploaded"+response.data.RESULT);
//             const result=response.data.RESULT;
//             return result;
               
//     } catch (e) {
//         console.log(url, e)
//         return(false)
//     }
// }
//with Promises
/*
this is used when u move the control to server and server perform the process and here on client side process goes continues async
const postDataAndImage =async(url, formData,config)=> {
    console.log(url, formData);
    
    try {
  
       await axios.post(`${BaseURL}/${url}`,formData,config)
        .then((response) => {
           
           
            //alert("The file is successfully uploaded"+response.data.RESULT);
            const result=response.data.RESULT;
            return result;
        }).catch((error) => {
            
            return (false)
    });
         
        
          
    } catch (e) {
        console.log(url, e)
        return(false)
    }
}*/


export { getData, postData ,BaseURL};