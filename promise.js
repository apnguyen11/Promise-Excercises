var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];


  function buildPromise(result){
    
    var aPromise = $.get(result)
    return aPromise
  }


const promises = urls.map(buildPromise)

promises[0]
  .then(promises[1])
  .then(function(){
      console.log("2 promises fetched")
  })

Promise.all(promises)
  .then(function(promise){
        console.log("all data was fecthed")
        console.log(promise)
  })

 
 
  function addNumbers(x, y){
      return new Promise((resolve, reject) => {
          if(typeof x == 'number' && typeof y == 'number'){
              resolve(x + y)
          } else {
              reject('These are not numbers!')
          }
      })
  }

  addNumbers(3, "d").then((message) => {
      console.log(message)
  }).catch((error) => {
      console.log(error)  
  })

  dropButteredPromisified = () => {
    let drop = Math.random();
    console.log(drop)
    return new Promise((resolve, reject) => {
    if (drop < 0.5) {
       resolve(console.log("Landed butter-side up!"));
    } else if (drop > 0.5) {
       reject(console.log("Landed butter-side down..."));
    } else {
        null
    }
  })
 }

 dropButteredPromisified().then(()=>{
    alert('Whew, that was close!');
 }).catch(()=>{
    alert('Well shucks, there goes my toast...');
 });

    // return Promise(
        //     function(x, y){
        //         return x + y
        //     }
        // )
  


//     function pickURL(eachURL){
//     $.get(eachURL, function(links){
//         console.log(links)
//     })
//   }