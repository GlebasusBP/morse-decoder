const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  
    let arr = [];
    
    let res = '';
  
    for(let i = 0; i < expr.length; i+=10 ){
      arr.push(expr.slice(i, i+10));
    }
  
    arr.forEach( e => {
      let Arr = [];
      let morzeKey = '';
  
      for(let i = 0; i < e.length; i+=2 ){
        if( e == '**********'){
          Arr.push('**');
          break;
        } else {
          Arr.push(e.slice(i, i+2));
        }  
      }
  
      Arr.forEach(e => {
        if(e == 10){
          morzeKey += '.';
        } else if(e == 11){
          morzeKey += '-';
        } else if(e == '**'){
          morzeKey += 'space';
        }
      })
  
      if(morzeKey == 'space'){
        res += ' ';
      } else {
        for(let key in MORSE_TABLE){
          if(key == morzeKey){
            res += MORSE_TABLE[key];
          }
        }
      }
    })
    return res;
  }

module.exports = {
    decode
}