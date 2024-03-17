function handleIconHover(iconId, hoverId) {
    const icon = document.getElementById(iconId);
    const iconHover = document.getElementById(hoverId);

    icon.addEventListener('mouseenter', () => {
        iconHover.style.opacity = '1';
    });

    icon.addEventListener('mouseleave', () => {
        iconHover.style.opacity = '0';
    });

    iconHover.addEventListener('mouseenter', () => {
        iconHover.style.opacity = '1';
    });

    iconHover.addEventListener('mouseleave', () => {
        iconHover.style.opacity = '0';
    });
}

const workData = async (url,callback)=>{
    const res = await fetch(url);
    const data = await res.json();
    callback(data);
}

displayPosts = (data) => { 
    const posts = document.getElementById('posts');
    for (let i = 0; i < data.posts.length; i++) {
        const p = data.posts[i];
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-[#F3F3F5] rounded-3xl p-10 flex flex-row gap-6">
                        <div class="rounded-lg lg:rounded-2xl h-[4.5rem] w-[4.5rem] relative">
                            <img src="${p.image}" class="object-cover rounded-lg md:rounded-2xl">
                            <div class="${p.isActive? "bg-green-500": "bg-red-500"} h-4 w-4 rounded-full absolute -top-1 -right-1"></div>
                        </div>
                        <div class="space-y-2 flex-1">
                            <div class="font-inter flex flex-row gap text-sml-txt8 gap-6 text-sm">
                                <h3 class=""># ${p.category}</h3>
                                <h3>Author: ${p.author?.name}</h3>
                            </div>
                            <h1 class="text-primary text-xl font-semibold">${p.title}</h1>
                            <p class="text-sml-txt6 text-base pb-5">${p.description}</p>
                            <div class="flex flex-row justify-between border-dashed border-t-2 border-[#12132D40] pt-6">
                                <div class="flex flex-row gap-6">
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p class="text-sml-txt7">${p.comment_count}</p>
                                    </div>
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p class="text-sml-txt7">${p.view_count}</p>
                                    </div>
                                    <div class="flex flex-row gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p class="text-sml-txt7">${p.posted_time} min</p>
                                    </div>
                                </div>
                            
                                <img id="${p.id}" onclick = "mark(event)" class="rounded-full hover:border-green-900 hover:border-2" src="images/email1.svg">
                                
                            </div>
                        </div>
                    </div>
        `
        posts.appendChild(div);
    }
}

const displayFeaturedPosts = (data) => {
    const latest_post = document.getElementById('latest_post');
    for (let i = 0; i < data.length; i++) {
        const p = data[i];
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="h-full rounded-3xl border-[1px] border-[#12132D26] p-6 space-y-4 flex flex-col">
        <!--Image-->
        <div>
            <img src="${p.cover_image}" class="w-full rounded-3xl">
        </div>
        <!--date-->
        <div class="flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_29_1881)">
                  <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 11H20" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_29_1881">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
            </svg>
            <p class="text-sml-txt6 font-light">${p.author.posted_date? p.author.posted_date:"No publish Date"}</p>
        </div>
        
        <!--header-->
        <h1 class="text-primary text-lg font-bold">${p.title}</h1>

        <!--description-->
        <p class="text-sml-txt6 font-light">${p.description}</p>

        <!--img&name-->
        <div class="flex flex-row gap-4">
            <div class="rounded-full h-11 w-11">
                <img src="${p.cover_image}" class="rounded-full w-full h-full">
            </div>
            <div>
                <h3 class="font-semibold text-primary">Cameron Williamson</h3>
                <p class="text-sml-txt6 text-sm font-light">${p.author.designation? p.author.designation:"Unknown"}</p>
            </div>
        </div>

    </div>
        `
        latest_post.appendChild(div);
    }
}

const mark = (event)=>{
    const clickedId = event.target.id;
    markAsRead(clickedId); 
}

const markAsRead = async (id)=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;

    const read = document.getElementById("readed_post");
    const readed_no = document.getElementById("readed_no");

    for (let i = 0; i < posts.length; i++) {
        if(posts[i].id == id && !checker.includes(id)){
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="bg-white rounded-3xl flex flex-row justify-between items-center p-4">
            <h1 class="w-[60%] text-primary text-base font-medium">${posts[i].title}
            </h1>
            <div class="flex flex-row justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="font-inter text-base font-light text-txt-sml6">${posts[i].view_count}</p>
            </div>
            </div>
            `
            read.appendChild(div);

            readed_no.innerHTML = parseInt(readed_no.innerHTML) + 1;

            checker.push(id);
            break;
        }
        else if(checker.includes(id)){
            alert("Already Added to list");
            break;
        }
    }
    
}



