// ####################
// select Movie
// ####################

const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// ####################
// select seat
// ####################

const container = document.querySelector('.container');

container.addEventListener('click', e => {
	
  if ( e.target.classList.contains('seat') && ! e.target.classList.contains('occupied') ) {
    
	e.target.classList.toggle('selected');

    updateSelectedCount();
  }
  
});

