import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');
const countriesInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange() {
  const name = inputRef.value.trim();

  if (name === '') {
    return countriesInfoRef.innerHTML === '', countriesListRef.innerHTML === '';
  }

  fetchCountries(name)
    .then(countries => {
      countriesListRef.innerHTML === '', countriesInfoRef.innerHTML === '';
      if (countries.length === 1) {
        console.log(countries);
      } else if (countries.length >= 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        console.log(countries);
      }
    })
    .catch(Notiflix.Notify.failure('Oops, there is no country with that name'));

}
