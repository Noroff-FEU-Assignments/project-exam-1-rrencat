const container = document.querySelector(".slideshow-container");


const url = "https://www.rrencat.one/wp-json/wp/v2/posts?_embed&per_page=100";


async function getDetails() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        
        console.log(getPosts);

        


        container.innerHTML = "";

        

        const blogPosts = getPosts;

        for (let i = 0; i < blogPosts.length; i++) {
            const title = blogPosts[i].title.rendered;
            const image = blogPosts[i]._embedded["wp:featuredmedia"][0].source_url;
            const id = blogPosts[i].id;

            console.log(title);
            
            
           
            container.innerHTML += `<a href="details.html?id=${id}" class="card">
                                            <div class="image" style="background-image: url(${image})"></div>
                                            <div class="details">
                                                <h4 class="name">${title}</h4>
                                            </div>
                                        </a>`; 

            
                                        
        }
        
        
        
    }

    catch(error) {
        console.log(error);
    }
    
}

getDetails();


            