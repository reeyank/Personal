import user2 from './combos/Login.js';

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    
    return str.join(' ');
  }

// TODO: Add more data here that represents the user's personal data in a centralized place
export const name = titleCase("reeyan khimani");