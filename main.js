const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15",
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10",
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.getElementById('container')
posts.forEach(element => {
    container.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                ${((element.author.image == null ? `<div class="profile-pic-default"><span>${element.author.name.match(/(\b\S)?/g).join("")}</span></div>` : `<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">`))}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${localDate(element.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <span class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </span>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
});

const likesBtn = document.querySelectorAll('.like-button');
const likeCounter = document.querySelectorAll('.js-likes-counter');
const likedPosts = [];

likesBtn.forEach((element, index) => {

    element.addEventListener('click', function(){
        element.classList.toggle('like-button--liked');
        if(element.classList.contains('like-button--liked')){
            posts[index].likes++
            likeCounter[index].innerHTML = `${posts[index].likes}`
    
            if(!likedPosts.includes(posts[index].id)){
                likedPosts.push(posts[index].id)   
            }

        }else{
            posts[index].likes--
            likeCounter[index].innerHTML = `${posts[index].likes}`
            let indice = (likedPosts.indexOf(posts[index].id));
            likedPosts.splice(indice,1)
        }
        console.log(likedPosts)
    })
})


function localDate(element){
    let date = new Date(element)
    let giorno = date.getDate()
    if(giorno < 10){
        giorno = '0'+giorno;
    }
    let mese = date.getMonth()+1
    if(mese < 10){
        mese = '0'+mese
    }
    let anno = date.getFullYear();
    return `${giorno}-${mese}-${anno}`
}
