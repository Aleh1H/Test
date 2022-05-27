// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const data = document.forms.user;
//
// const button = document.getElementById('but')
// button.addEventListener('click', () =>{
//     const dname = data.name.value;
//     const dage = data.age.value;
//     localStorage.setItem(dname, dage);
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const {model, type, volume} = document.forms.car;
const button = document.getElementById('but');

button.addEventListener('click', () => {

    const carsparse = JSON.parse(localStorage.getItem('cars')) || [];
    const carmodel = model.value;
    const cartype = type.value;
    const carvolume = volume.value;
    carsparse.push({carmodel, cartype, carvolume});
    localStorage.setItem('cars', JSON.stringify(carsparse))

})




















