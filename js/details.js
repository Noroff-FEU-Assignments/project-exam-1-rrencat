const detailContainer = document.querySelector(".blog-details");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.rrencat.one/wp-json/wp/v2/posts/" + id ;

console.log(url);

async function fetchBlogPost() {

    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        
        console.log(getPosts);

        createHtml(getPosts);


    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchBlogPost();

function createHtml(details) {
    detailContainer.innerHTML = `<div>
                                    ${details.content.rendered}
                                </div>`;

    title.innerHTML = `Adventure Awaits | Blog | ${details.title.rendered}`;

}


