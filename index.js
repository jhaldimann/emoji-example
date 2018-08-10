// https://unicode.org/emoji/charts/full-emoji-list.html
// https://codepen.io/jhaldimann/pen/zWXZdM

function changeColor () {
  let face = '👸🏻'.replace('🏻','🏿');
  console.log('🙅🏻'.replace('🏻', '🏿'));

  let h1 = document.querySelector('.👸');

  h1.innerHTML = face + '👋';
  getLengthOfEmoji();
  modifyFamily();
  console.log('👨🏻‍⚕');️
}

function getLengthOfEmoji () {
  let lengthLabel = document.querySelector('.🚀');
  let lengthLabel2 = document.querySelector('.👨‍👩‍👧');
  let farmer = document.querySelector('.👩‍🌾');
  lengthLabel.innerHTML = ' 🚀 Length = ' + '🚀'.length;
  lengthLabel2.innerHTML = ' 👨‍👩‍👧 Length = ' + '👨‍👩‍👧'.length;
  farmer.innerHTML = ' 👩‍🌾 Length = ' + '👩‍🌾'.length;
  console.log([...'👨‍👩‍👧']);
  console.log('👨‍👩‍👧'.length);
  //console.log('👨‍⚕️'.length);
  //console.log('👨‍🏫'.length);
  //console.log('👩‍🌾'.length);
  console.log('👩‍🎤'.length);
}

function modifyFamily () {
  let familyWithSameParentGender = document.querySelector('.👨‍👨‍👧‍👦');
  let familyWithOneKid = document.querySelector('.👨‍👩‍👧‍👦‍‍');
  let specialFamily = document.querySelector('.special');
  let familyWithoutKids = document.querySelector('.no-kids');
  familyWithSameParentGender.innerHTML = '👨‍👩‍👦‍👦' + ' After ' + '👨‍👩‍👦‍👦'.replace('👦‍', '👧‍');

  familyWithOneKid.innerHTML = '👨‍👩‍👧‍👦' + ' After ' + '👨‍👩‍👦‍👦'.replace('👦‍', '');
  specialFamily.innerHTML = '👨‍👨‍👧‍👦' + ' After ' + '👨‍👩‍👦‍👦'.replace('👨', '‍👩');
  familyWithoutKids.innerHTML = '👨‍👩‍👧' + ' After ' + '👨‍👩‍👧'.replace('‍👧', '‍');
}


