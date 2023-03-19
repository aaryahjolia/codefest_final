document.getElementById('dot-2').addEventListener('click',()=>{
    document.getElementById('dot-1').classList.remove('active_carousel');
    document.getElementById('dot-3').classList.remove('active_carousel');
    document.getElementById('dot-2').classList.add('active_carousel');

    document.getElementById('img').src="./Assets/P-3.jpg"
});

document.getElementById('dot-3').addEventListener('click',()=>{
    document.getElementById('dot-2').classList.remove('active_carousel');
    document.getElementById('dot-1').classList.remove('active_carousel');
    document.getElementById('dot-3').classList.add('active_carousel');

    document.getElementById('img').src="./Assets/P-4.jpg"
});

document.getElementById('dot-1').addEventListener('click',()=>{
    document.getElementById('dot-2').classList.remove('active_carousel');
    document.getElementById('dot-3').classList.remove('active_carousel');
    document.getElementById('dot-1').classList.add('active_carousel');

    document.getElementById('img').src="./Assets/P-1.jpg"
});