import maxPrice from "./hw1_variables/hw1.js";
import getSumOfNumbers from "./hw2_cycles/hw2.js";
import getMaxDigit from "./hw3_functions/hw3.js";
import getPairsWithThemes from "./hw4_arrays/hw4.js";
import divideByFive from "./hw5_arrays2/hw5.js";
import {students1, getSubjects} from "./hw6_objects/hw6.js";
import {ukraine, getMyTaxes} from "./hw7_closure/hw7.js";
import {ostapBender} from "./hw8_classes/hw8.js";
import {block, generateBlocks} from "./hw9_DOM/hw9.js";
import {audio, playList} from "./hw10_events/hw10.js";
import {getRandomChinese} from "./hw11_promises/hw11.js";
import {getCharacters} from "./hw12_api/hw12.js";
import {inc} from "./hw13_generators/hw13.js";



const hw1 = document.querySelector('.hw1');
const hw2 = document.querySelector('.hw2');
const hw3 = document.querySelector('.hw3');
const hw4 = document.querySelector('.hw4');
const hw5 = document.querySelector('.hw5');
const hw6 = document.querySelector('.hw6');
const hw7 = document.querySelector('.hw7');
const hw8 = document.querySelector('.hw8');
const hw9 = document.querySelector('.hw9');
const hw10 = document.querySelector('.hw10');
const hw11 = document.querySelector('.hw11');
const hw12 = document.querySelector('.hw12');
const hw13 = document.querySelector('.hw13');
const hwWrapper = document.querySelector('.hw_wrapper');
const characters = document.querySelector('.users');


hw1.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
   
   console.log('max price: ', maxPrice);
});

hw2.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    getSumOfNumbers();
});

hw3.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(` ${getMaxDigit(1236)}`);
});

hw4.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`${getPairsWithThemes}`);
});

hw5.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`${divideByFive}`)
})

hw6.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`${getSubjects(students1[0])}`);
});

hw7.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`${getMyTaxes.call(ukraine, 1000)}`);
});

hw8.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log (
        `${ostapBender.getInfo()}`
    );
});


hw9.addEventListener('click', () => {
    characters.style.display = 'none';
    block.style.display = 'flex';
    characters.style.display = 'none';
    stopPlay()
    const generateBlocksInterval = () => {
        setInterval(() => {
          generateBlocks()
        }, 1000);
      }
      return generateBlocksInterval()
    
});

hw10.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
  playList();
    
});

function stopPlay() {
    if (audio !== null) {
      audio.pause();
      audio.currentTime = 0;
    }
}

hw11.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    getRandomChinese(4).then(str =>{
        console.log(`${str}`);
    });
});


hw12.addEventListener('click', () => {
    stopPlay()
    block.style.display = 'none';
    characters.innerHTML = '';
    characters.style.display = 'block';
    characters.style.display = 'flex';
    getCharacters().then(film => {});
});

hw13.addEventListener('click', () => {
    stopPlay()
    block.style.display = 'none';
    characters.style.display = 'none';
    console.log(inc.next().value);
})