import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

// console.log(Player);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
};

const lastCurrentTime = localStorage.getItem(TIME_KEY);
if (lastCurrentTime) {
  player.setCurrentTime(lastCurrentTime);
};
