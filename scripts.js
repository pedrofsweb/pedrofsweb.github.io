'use strict';
document.addEventListener('DOMContentLoaded', () => {

// Distribute space between the header's paragraph characters
const headerP = document.querySelector('p');
let spanChars = '';
for(let char of headerP.textContent) {
  if (char == ' ') char = '&nbsp;'; // Keep space between words
  spanChars += `<span>${char}</span>`;
}
headerP.innerHTML = spanChars;
headerP.style.display = 'flex';
headerP.style.justifyContent = 'space-between';

// Set copyright current year
document.querySelector('#year').textContent = new Date().getFullYear();

});
