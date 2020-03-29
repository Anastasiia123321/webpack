export const getPairsWithThemes = (pairs, themes) => {
    let pairsAndThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        pairsAndThemes.push([pairs[i].join(' и '), themes[i]]);
    }
    return pairsAndThemes;
}