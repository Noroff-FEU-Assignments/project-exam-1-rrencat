const carouselContainer = document.querySelector(".blog-feature");

const url = "https://www.rrencat.one/wp-json/wp/v2/posts?_embed&per_page=100";


async function getDetails() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        
        console.log(getPosts);

        carouselContainer.innerHTML = "";

        const blogPosts = getPosts;

        blogPosts.forEach(function(blog) {
            carouselContainer.innerHTML += `<a href="details.html?id=${blog.id}" class="card">
                                    <div class="image" style="background-image: url(${blog._embedded["wp:featuredmedia"][0].source_url})"></div>
                                    <div class="details">
                                        <h2 class="name">${blog.title.rendered}</h2>
                                    </div>
                                </a>`;
        });

        
    }

    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = message("error", error);
    }
    
}

getDetails();



