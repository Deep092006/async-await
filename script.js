function deep() {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log("deep");
      resolve("Resolved from deep");
    }, 3000);
  });
}

function deep3() {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let d = 5;
      if(d > 10){
        resolve("Resolved from deep3");
      } 
      else{
        reject("Rejected from deep3");
      }
    }, 3000);
  });
}

async function deep2() {
  await deep();
  deep3().then((result) => {
    console.log("Success:", result);  // Result of resolve
  })
  .catch((error) => {
    console.log("Failed:", error);  // Error message from reject
  });
}

deep2();
