const landingTime = new Date('January 3, 2021 19:45:00').getTime();

const timer = () => {
  const now = new Date().getTime();

  const distance = landingTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds until Justi and Kenny meet!`;
};

const counterUpdateInterval = setInterval(() => {
  return timer();
}, 1000);

export default counterUpdateInterval;
