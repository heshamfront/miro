console.log('hello world');
  const tabsWrapper = document.querySelector('.tabs-wrapper');
  document.getElementById('scrollLeft').onclick = () => tabsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
  document.getElementById('scrollRight').onclick = () => tabsWrapper.scrollBy({ left: 200, behavior: 'smooth' });

//  start popup image viewer code
