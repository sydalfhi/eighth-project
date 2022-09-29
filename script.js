const judul = document.querySelector('.judul');
const isi = document.querySelector('.isi');
const buat = document.querySelector('button.buat');

let judulNote, isiNote;






function menampilkanHasilAkhir() {
    let kotak = document.createElement('div');
    kotak.classList.add('kotak');
    kotak.innerHTML = [`
    <div class="kiri">
     <h1 class="judulText">${judulNote}</h1>
    <p class="isiText">${isiNote}</p>
    </div>
    <div class="kanan">
    <button class="edit">edit</button>
    <button class="remove">hapus</button>
    </div>
    `].join('');
    document.body.appendChild(kotak);
}

function getNamaJudul() {
        judulNote = judul.value;
}
function getIsi() {
        isiNote = isi.value;
}
function reset() {
    judul.value = '';
   isi.value = '';
    
}

   








buat.addEventListener('click',()=>{
    getNamaJudul();
    getIsi();
   
menampilkanHasilAkhir();
reset();
});























document.body.addEventListener('click',(e)=>{
    if (e.target.className == 'edit') {
        
        judul.value =   e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML;
        isi.value =   e.target.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML;
        window.scrollTo(0, 0);
    }
    if(e.target.className == 'remove'){
        e.target.parentElement.parentElement.style.display = 'none';
            // localStorage.removeItem('name');
            // e.preventDefault();
    }
})



    





    // hapus.addEventListener('click', (e) => {
    // });
