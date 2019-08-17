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
      console.log("2 promises")
  })

Promise.all(promises)
  .then(function(promise){
        console.log("they have all resolved")
        console.log(promise)
  })



//     function pickURL(eachURL){
//     $.get(eachURL, function(links){
//         console.log(links)
//     })
//   }