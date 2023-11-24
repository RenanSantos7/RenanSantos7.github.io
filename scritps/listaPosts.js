import blogPosts from "./blogdb.js";

const secPosts = document.querySelector('#posts-container')
const posts = [...blogPosts]
posts.reverse()

posts.map(post => secPosts.innerHTML += `
    <article class="card">
        <a class="blog__link" href="blog.html" data-post="${post.id}">
            <figure class="card__imagem">
                <img src="${post.imageURL}" alt="">
            </figure>
            <div class="card__texto">
                <h3>${post.title}</h3>
                <p>${post.text[0].substring(0,99)}...</p>
            </div>
        </a>
    </article>
`)
