export let audio = null;

export function playList() {
  audio = new Audio("../src/audio/drum.mp3");
  audio.play();
}