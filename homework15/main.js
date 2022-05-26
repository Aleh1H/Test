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

const cars = document.forms.car;
const button = document.getElementById('but');
button.addEventListener('click', () =>{
    const carmodel = cars.model.value;
    const cartype = cars.type.value;
    const carvolume = cars.volume.value;
    const car = [carmodel, cartype, carvolume];
    // console.log(car)
    localStorage.setItem('car', JSON.stringify(car))
})
