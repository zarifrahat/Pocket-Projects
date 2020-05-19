
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  const keys = Object.keys(dogs);
  const dogsArr = [];
  // debugger;

  keys.forEach(dog =>{
    const newATag = document.createElement('a');
    newATag.innerHTML = dog;
    newATag.setAttribute("href", `${dogs[dog]}`);

    const newLiTag = document.createElement('li');
    newLiTag.classList.add('dog-link');

    newLiTag.append(newATag);
    dogsArr.push(newLiTag);
  })

  return dogsArr;
}

function attachDogLinks(){
  let dogLinks = dogLinkCreator();

  dogLinks.forEach(link => {
    $('.drop-down-dog-list').append(link);
  });
}
 attachDogLinks();

function handleEnter(){
  const elements = document.getElementsByClassName('dog-link');
  Array.from(elements).forEach(el=>{
    el.classList.remove('dog-link')
    el.classList.add('shown-dog-link')
  })

}

function handleLeave() {
  const elements = document.getElementsByClassName('shown-dog-link');
  Array.from(elements).forEach(el => {
    el.classList.remove('shown-dog-link')
    el.classList.add('dog-link')
  })
}

const dogList = document.getElementsByClassName('drop-down-dog-list');
// debugger;


dogList[0].addEventListener('mouseover', handleEnter);

dogList[0].addEventListener('mouseout', handleLeave);




