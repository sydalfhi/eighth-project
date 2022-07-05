const inputText = document.querySelector('.nama')
const btnKirim = document.querySelector('#tambah')
const ul = document.querySelector('ul');
const konten = document.querySelector('.container');
const spanHapus = document.querySelector('.hapus');
const cardH = document.querySelector('.card-header');
const mode = document.querySelector('.mode');

// 
// 
// 
function hurufPertamaKapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


// 
// 
// 
function satu() {
    //    
    if (inputText.value == '') {
        alert('Harap mengisi bidang inputan');
    }else{  
        btnKirim.classList.replace('tambah', 'gantiSetelahDiClick');
        cardH.classList.add('ganticard');
        const d = new Date();
        let tahun = d.getFullYear();
        let bulan = d.getMonth();
        let tanggal = d.getDate();
        let jam = d.getHours();
        let menit = d.getMinutes();
        let detik = d.getSeconds();
        jam = jam < 10 ? `0${d.getHours()}` : `${d.getHours()}`;
        menit = menit < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
        detik = detik < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`;            
        tahun = tahun < 10 ? `0${d.getFullYear()}` : `${d.getFullYear()}`;            
        bulan = bulan < 10 ? `0${d.getMonth()}` : `${d.getMonth()}`;            
        tanggal = tanggal  < 10 ? `0${d.getDate()}` : `${d.getDate()}`;            

        let hasilDariUser = inputText.value;


        let pesan = {
                inputan: hurufPertamaKapital(hasilDariUser),
                tanggal : `${tahun}-${bulan}-${tanggal}      /   ${jam}:${menit}:${detik}`
        }
        
    

        let el = `
        <li>
        <h1>${pesan.inputan}</h1>
        <p>${pesan.tanggal}</p>
        <span class="hapus">Delete</span>
        </li>
        `;
        
        
        ul.innerHTML += el;
        inputText.value = '';
        
        
        konten.addEventListener('click',(e)=>{
            if(e.target.innerHTML == 'Delete' ){
                e.target.parentElement.classList.add('dnone');
            }
        });

    }
}


// 
// 
// 

mode.addEventListener('click',()=>{
    ul.classList.toggle('gantiMode');
});

btnKirim.addEventListener('click',()=>{
     satu();
});


// 


