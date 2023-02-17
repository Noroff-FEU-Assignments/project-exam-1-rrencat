const carouselContainer = document.querySelector(".blog-feature");

const url = "https://www.rrencat.one/wp-json/wp/v2/posts?_embed";


async function getDetails() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        
        console.log(getPosts);

        carouselContainer.innerHTML = "";

        

        for (let i = 0; i < getPosts.length; i++) {
            const title = getPosts[i].title.rendered;
            const image = getPosts[i]._embedded["wp:featuredmedia"][0].source_url;
            const id = getPosts[i].id;

            console.log(title);

            if (i === 8) {
                break;
            }

            carouselContainer.innerHTML += `<a href="details.html?id=${id}" class="card">
                                                <div class="image" style="background-image: url(${image})"></div>
                                                <div class="details">
                                                    <h4 class="name">${title}</h4>
                                                </div>
                                            </a>`;
        }

        

        
    }

    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = message("error", error);
    }
    
}

getDetails();



