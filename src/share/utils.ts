export const randomByRange = (min: number, max: number) => {
  const v = Math.random() * (max - min) + min;
  return Math.floor(v);
};

export const compare4Sort = (a: { score: number }, b: { score: number }) => {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
};

type optionAnimation = {
  duration: number;
  timings: (timeFraction: number) => number;
  draw: (progress: number) => void;
};

export function animate({ duration, timings, draw }: optionAnimation) {
  const start = performance.now();
  return new Promise(resolve => {
    requestAnimationFrame(function animateFrame(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timings(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        resolve(true);
      }
    });
  });
}
