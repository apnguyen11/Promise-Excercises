var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];


  function buildPromise(result){
      console.log(result)
    var aPromise = $.get(result)
      .then(console.log("data fetched"))
    return aPromise
  }


const promises = urls.map(buildPromise)

$(function (){
    return promises
})
  



//     function pickURL(eachURL){
//     $.get(eachURL, function(links){
//         console.log(links)
//     })
//   }