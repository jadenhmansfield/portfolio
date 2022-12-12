//behold (instagram api)
async function getImages() {
    let url = 'https://feeds.behold.so/zeMMGGz2WmSrrHaVflG1';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  
  async function renderImages() {
    let images = await getImages();
    let target = document.querySelector('#target');
  
  images.forEach((val, key) => {  
    target.innerHTML += `<div class="image-card"><img src ="${val.mediaUrl}" class="image-insta"></div>`;
  });
  }
  
  renderImages();
