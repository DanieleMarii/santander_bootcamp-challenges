const BASE_URL = 'https://cataas.com/cat?json=true/';
const btn = document.getElementById('change-cat');
const img = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.url;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    img.src = 'https://cataas.com/' + await getCats();
}

loadImg();

btn.addEventListener('click', loadImg);


