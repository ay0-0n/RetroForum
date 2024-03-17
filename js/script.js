handleIconHover('icon1', 'icon1-hover');
handleIconHover('icon2', 'icon2-hover');
handleIconHover('icon3', 'icon3-hover');
handleIconHover('icon4', 'icon4-hover');

const all_posts = workData('https://openapi.programming-hero.com/api/retro-forum/posts',displayPosts);

const featured_posts = workData('https://openapi.programming-hero.com/api/retro-forum/latest-posts',displayFeaturedPosts); 


const checker = [];

const input = document.getElementById('search_inp');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', async () => {
    const searchValue = input.value.trim().toLowerCase();
    const validCategories = ['coding', 'music', 'comedy'];

    if (searchValue) {
        const posts = document.getElementById('posts');
        posts.innerHTML = `<span class="loading loading-bars loading-lg justify-self-center self-center text-primary"></span>`;

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (validCategories.includes(searchValue)) {
            workData(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`, displayPosts);
            posts.innerHTML = '';
        } else {
            posts.innerHTML = 'No search results found';
        }
    }
});

