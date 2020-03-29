export const personPhoto = {
    'Luke Skywalker': 'https://vignette.wikia.nocookie.net/ru.starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/500?cb=20061127144734',
    'C-3PO': 'https://vignette.wikia.nocookie.net/ru.starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/top-crop/width/360/height/450?cb=20180306071015',
    'R2-D2': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
    'Darth Vader': 'https://vignette.wikia.nocookie.net/starwars/images/a/a3/ANOVOS_Darth_Vader_1.png/revision/latest?cb=20150128225029',
    'Leia Organa': 'https://vignette.wikia.nocookie.net/starwars/images/f/f1/Leia_Organa_TROS.png/revision/latest?cb=20200102034101',
    'Obi-Wan Kenobi': 'https://vignette.wikia.nocookie.net/starwars/images/e/e7/LE_Obi-Wan_Kenobi_Commander_Expansion.png/revision/latest?cb=20190906023428',
    'Chewbacca': 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20190830144754',
    'Han Solo': 'https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png/revision/latest?cb=20160208055002',
    'Wedge Antilles': 'https://vignette.wikia.nocookie.net/starwars/images/8/82/Wedge_TROS.jpg/revision/latest?cb=20200119002320',
    'Yoda': 'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125',
    'Palpatine': 'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935',
    'IG-88': 'https://vignette.wikia.nocookie.net/starwars/images/a/aa/IG-88B-ESB.jpg/revision/latest?cb=20151130035541',
    'Boba Fett': 'https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png/revision/latest?cb=20161114160631',
    'Bossk': 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712',
    'Lando Calrissian': 'https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/0/0a/Lando5.jpg/revision/latest?cb=20170807090725',
    'Lobot': 'https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg/revision/latest?cb=20160123060717',
    'Biggs Darklighter': 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
    'Raymus Antilles': 'https://vignette.wikia.nocookie.net/starwars/images/d/d7/Antilles-SWE.png/revision/latest?cb=20141111165721',
    'Owen Lars': 'https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249',
}

export async function getCharacters() {
    const res =  await axios.get('https://swapi.co/api/films/2');
    const arr = res.data.characters;
    const container = document.querySelector('.users');
   arr.forEach(el => {
      let newR = axios.get(el).then(newR => {
       const infoCharacter = document.createElement('div');
       const name = newR.data.name;
       infoCharacter.innerHTML = `
       <img class="photo" src="${personPhoto[name]}">
       <h3>${newR.data.name}</h3>
       <h5>${newR.data.birth_year}</h5>
       <p>${newR.data.gender}</p>
       `
       container.append(infoCharacter);
       infoCharacter.classList.add('user')
       });
      
})
}