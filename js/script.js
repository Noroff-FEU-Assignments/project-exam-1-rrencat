const container = document.querySelector(".results");

const url = "http://localhost/exam-1/wp-json/wp/v2/posts?_embed";


async function getDetails() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        
        console.log(getPosts);

        container.innerHTML = "";

        const blogPosts = getPosts;

        blogPosts.forEach(function(blog) {
            container.innerHTML += `<a href="details.html?id=${blog.id}" class="card">
                                    <div class="image" style="background-image: url(${blog._embedded["wp:featuredmedia"][0].source_url})"></div>
                                    <div class="details">
                                        <h4 class="name">${blog.title.rendered}</h4>
                                    </div>
                                </a>`;
        });

        
    }

    catch(error) {
        console.log(error);
        container.innerHTML = message("error", error);
    }
    
}

getDetails();