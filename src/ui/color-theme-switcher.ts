function setColorScheme(scheme) {
  switch(scheme){
    case 'dark':
      console.log('dark');
      
      break;
    case 'light':
      console.log('light');
      // Light
      break;
    default:
      // Default
      console.log('default');
      break;
  }
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function updateColorScheme(){
    setColorScheme(getPreferredColorScheme());
}

if(window.matchMedia){
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();