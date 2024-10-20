const galleries = {
    gallery1: [
        { src: 'image1.png', message: 'You look absolutely radiant in this outfit, it is beautifully complementing your beauty. Aese jaogi kisi function m to uski khubsurti m chaar chaand lah jayenge !!' },
        { src: 'image2.png', message: 'Waaao !! Everything in this photo is perfect, the outfit, your hand position, your posture.. Everything is just wao !' },
        { src: 'image3.png', message: 'Wese to Traditional k saaamne sab feeeka pad jaata hai but tumne ye bhi galat prove krdya that is why keeping this picture along with traditionals ones !!' },
        // Add more images as needed
    ],
    gallery2: [
        { src: 'image4.png', message: 'You look extremely classyyyy in this outfittt....Samajh nhi aarhaa outfit ki tareef krun ya tumhari... dono his best hai <3 !!' },
        { src: 'image5.png', message: 'This photo is for your chubby cheeeksss.... hehehehe' },
        { src: 'image6.png', message: 'It is not just a normal picture, your body posture, legs position and hands placement, the way your eyes are down.. everything makes it a masterpiece !!' },
        // Add more images as needed
    ],
    gallery3: [
        { src: 'image7.png', message: 'Itne Qareeb se koi tumhari ye pyaari smile dekhle to wo apne saare gumm bhulaade !! Your smile can make my day really...' },
        { src: 'image8.png', message: 'You may think why this photo? Because this is something very hot !! It may look weird but I like the  way you have done your nails, quiet attractive, your lips looks nicely red and agr wo til hai to bht sahi jagah pr hai... hahaha' },
        { src: 'image9.png', message: 'Bas jo is photo ki backgroud m hai wo padhlo, aur baaki to tumhari ye aadaayein kayal kr hi deti hai :) ' },
        // Add more images as needed
    ]
};

function changePage() {
    const selectedGallery = document.getElementById('pageSelector').value;
    const galleryContainer = document.getElementById('galleryContainer');
    
    // Clear previous gallery
    galleryContainer.innerHTML = '';
    
    if (selectedGallery) {
        const galleryData = galleries[selectedGallery];
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        galleryData.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item';
            itemDiv.onclick = () => itemDiv.classList.toggle('flipped');

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.message;

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.innerText = item.message;

            itemDiv.appendChild(img);
            itemDiv.appendChild(messageDiv);
            grid.appendChild(itemDiv);
        });

        galleryContainer.className = selectedGallery; // Apply unique styles
        galleryContainer.appendChild(grid);
    }
}
