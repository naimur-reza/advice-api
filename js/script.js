const loadData  = () => {
    const URL = `https://api.adviceslip.com/advice`
    fetch(URL).then(res => res.json()).then(data => displayData(data))
}

const displayData = (data) => {
    const container = document.getElementById('container')
    container.innerHTML = `
    <div class="lg:w-96 bg-slate-700  px-10 pt-16 text-center mx-auto lg:mt-10 rounded-lg">
    <h1 class="text-teal-300 font-semibold text-lg py-2"> Advice No : ${data.slip.id} </h1>
    <h1 class="text-3xl font-semibold text-white mb-8">${data.slip.advice}</h1>
    <hr>
    <button onclick="loadData()" class="bg-green-500  relative top-28  rounded-full py-5 px-6 hover:shadow-teal-400 shadow-2xl transition-all"><i class="fa-solid fa-dice-four fa-2x"></i></button>
</div>
    `
    

}

loadData()