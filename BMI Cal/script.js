const form = document.querySelector('form');
const p=document.querySelector('p')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else  {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);// it give 2 decimal place value
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;

  

  if(bmi>18.6)
    
    results.innerHTML=`Under Weight: <span>${bmi}</span>`;
    
    else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
            `Normal : <span>${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
}
});


