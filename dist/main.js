!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=Math.max(15.678,123.965,90.2345);function i(e){const t=e.split(" "),n=[];return t.map(e=>{for(let t=0;t<e.length;t+=3)n.push(e.slice(t,t+3))}),n}const o=[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}],r={tax:.195,middleSalary:1789,vacancies:11476};function a(e){return e*this.tax}const l=new class{constructor(e,t,n){this.university=e,this.course=t,this.fullName=n,this.marksArr=[5,4,5,2],this.isDismiss=!1}getInfo(){return`Student ${this.course} of course ${this.university} ${this.fullName}`}get marks(){return this.isDismiss?null:this.marksArr}set marks(e){if(this.isDismiss)return null;this.marksArr.push(e)}getAverageMark(){return this.isDismiss?null:Number((this.marksArr.reduce((function(e,t){return e+t}))/this.marksArr.length).toFixed(2))}dismissStudent(){return this.isDismiss=!0}recoverStudent(){return this.isDismiss=!1}}("Студент 1го курса","Высшей Школы Мошенничества г.Одесса","Остап Родоманський Бендер");console.log(l.getInfo());const c=document.querySelector(".dom");function u(){return Math.floor(256*Math.random())}let d=null;const p={"Luke Skywalker":"https://vignette.wikia.nocookie.net/ru.starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/500?cb=20061127144734","C-3PO":"https://vignette.wikia.nocookie.net/ru.starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/top-crop/width/360/height/450?cb=20180306071015","R2-D2":"https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914","Darth Vader":"https://vignette.wikia.nocookie.net/starwars/images/a/a3/ANOVOS_Darth_Vader_1.png/revision/latest?cb=20150128225029","Leia Organa":"https://vignette.wikia.nocookie.net/starwars/images/f/f1/Leia_Organa_TROS.png/revision/latest?cb=20200102034101","Obi-Wan Kenobi":"https://vignette.wikia.nocookie.net/starwars/images/e/e7/LE_Obi-Wan_Kenobi_Commander_Expansion.png/revision/latest?cb=20190906023428",Chewbacca:"https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20190830144754","Han Solo":"https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png/revision/latest?cb=20160208055002","Wedge Antilles":"https://vignette.wikia.nocookie.net/starwars/images/8/82/Wedge_TROS.jpg/revision/latest?cb=20200119002320",Yoda:"https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125",Palpatine:"https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935","IG-88":"https://vignette.wikia.nocookie.net/starwars/images/a/aa/IG-88B-ESB.jpg/revision/latest?cb=20151130035541","Boba Fett":"https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png/revision/latest?cb=20161114160631",Bossk:"https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712","Lando Calrissian":"https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/0/0a/Lando5.jpg/revision/latest?cb=20170807090725",Lobot:"https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg/revision/latest?cb=20160123060717","Biggs Darklighter":"https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406","Raymus Antilles":"https://vignette.wikia.nocookie.net/starwars/images/d/d7/Antilles-SWE.png/revision/latest?cb=20141111165721","Owen Lars":"https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249"};let m=0;const g=function*(){for(;;)yield++m}(),y=document.querySelector(".hw1"),h=document.querySelector(".hw2"),w=document.querySelector(".hw3"),b=document.querySelector(".hw4"),k=document.querySelector(".hw5"),v=document.querySelector(".hw6"),f=document.querySelector(".hw7"),S=document.querySelector(".hw8"),_=document.querySelector(".hw9"),L=document.querySelector(".hw10"),E=document.querySelector(".hw11"),O=document.querySelector(".hw12"),j=document.querySelector(".hw13"),x=(document.querySelector(".hw_wrapper"),document.querySelector(".users"));function q(){null!==d&&(d.pause(),d.currentTime=0)}y.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log("max price: ",s)}),h.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),function(){let e=Number(prompt("Enter a start number, please","10"));for(;!Number.isInteger(e);)e=Number(prompt("Enter an integer start number, please","10"));let t=Number(prompt("Enter a final number, please","100"));for(;!Number.isInteger(t);)t=Number(prompt("Enter an integer final number, please","100"));e>t&&(t=Number(prompt("Enter a final number greater that a start number, please")));const n=confirm("Do you want to skip the even numbers?");let s=0;for(let i=e;i<=t;i++)(!1===n||!0===n&&i%2!=0)&&(s+=i);console.log(`Result of the HW#2 >> \nThe sum of numbers between 2 chosen numbers is: ${s}`)}()}),w.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log(` ${function(e){const t=e.toString();return Math.max(...t)}(1236)}`)}),b.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log("undefined")}),k.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log(`${i}`)}),v.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log(`${(e=>{const{subjects:t}=e;return Object.keys(t).map(e=>e[0].toUpperCase()+e.slice(1).toLowerCase()).map(e=>e.split("_").join(" "))})(o[0])}`)}),f.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log(`${a.call(r,1e3)}`)}),S.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),console.log(`${l.getInfo()}`)}),_.addEventListener("click",()=>{x.style.display="none",c.style.display="flex",x.style.display="none",q();setInterval(()=>{!function(){c.innerHTML="";for(let e=0;e<25;e++){const e=document.createElement("div");e.classList.add("random"),c.append(e),e.style.backgroundColor=`rgb(${u()}, ${u()}, ${u()})`}}()},1e3)}),L.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),d=new Audio("../src/audio/drum.mp3"),d.play()}),E.addEventListener("click",()=>{c.style.display="none",x.style.display="none",q(),(async e=>{let t="";for(let n=0;n<e;n++){const e=new Promise(e=>{setTimeout(()=>{let t=String(Date.now());t=t.substring(t.length-5),e(String.fromCharCode(t))},50)});await e.then(e=>{t+=e})}return t})(4).then(e=>{console.log(`${e}`)})}),O.addEventListener("click",()=>{q(),c.style.display="none",x.innerHTML="",x.style.display="block",x.style.display="flex",async function(){const e=(await axios.get("https://swapi.co/api/films/2")).data.characters,t=document.querySelector(".users");e.forEach(e=>{axios.get(e).then(e=>{const n=document.createElement("div"),s=e.data.name;n.innerHTML=`\n       <img class="photo" src="${p[s]}">\n       <h3>${e.data.name}</h3>\n       <h5>${e.data.birth_year}</h5>\n       <p>${e.data.gender}</p>\n       `,t.append(n),n.classList.add("user")})})}().then(e=>{})}),j.addEventListener("click",()=>{q(),c.style.display="none",x.style.display="none",console.log(g.next().value)})}]);