import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// console.log(Player);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const lastCurrentTime = localStorage.getItem('videoplayer-current-time');
if (lastCurrentTime) {
  player.setCurrentTime(lastCurrentTime);
};
