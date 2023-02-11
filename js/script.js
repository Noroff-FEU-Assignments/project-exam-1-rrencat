const container = document.querySelector(".blog_container");

const url = "http://localhost/exam-1/wp-json/wp/v2/posts?_embed";


async function getDetails() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        createHTML(getPosts);
        //console.log(getPosts);

        
    }

    catch(error) {
        console.log(error);
    }
    
}

getDetails();

function createHTML(blogPosts){
    blogPosts.forEach(function(blog){
        console.log(blog);
        container.innerHTML +=
        `<div>
            <h2>${blog.title.rendered}</h2>
            
            <img src="${blog._embedded["wp:featuredmedia"][0].source_url}">
            
            <div>
                ${blog.content.rendered}
            <div>
                <a href="details.html?id=${blog.id}"></a>
            </div>
        </div>`;
    })
}