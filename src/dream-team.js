module.exports = function createDreamTeam(members) {
  let secret = [];

  if(!Array.isArray(members)){
  return false
  }

  members.forEach(letter => {
    if (typeof letter === 'string'){
      secret.push(letter.trim()[0].toUpperCase());
    }
  })
  return secret.sort().join('');
};