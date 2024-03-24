function replace(s){
    let newS = ''
    let vowels = "aAeEiIoOuU"
    for (let i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
}

const replace = s => s.replace(/[aeiou]/gi, '!');