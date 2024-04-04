const headers = new Headers();
headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0');

async function fetchDarflenAPI() {
    try {
        const response = await fetch('https://api.darflen.com/users/softblackx/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API Darflen:', error);
        throw error;
    }
}

function zfill(str, width) {
	str = str.toString()
    const len = str.length;
    if (len >= width) {
        return str;
    }
    const padding = '0'.repeat(width - len);
    return padding + str;
}

function convertLinksToClickable(text) {
    const linkRegex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;
    
    const newText = text.replace(linkRegex, function(link) {
        return '<a href="' + link + '" target="_blank" class="text-purple-800">' + link + '</a>';
    });

    return newText;
}

fetchDarflenAPI()
    .then(data => {
		if (data.posts.length == 0) {
			let span = document.createElement('div')
			span.innerHTML = "Il n'y a rien d'intéressant à voir, allez voir <a href='https://darflen.com/softblackx' target='_blank' class='text-purple-800'>Darflen</a>."
			span.classList.add('text-center', 'text-white/50', 'w-full')
			document.getElementById('posts').classList.add('block')
			document.getElementById('posts').classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2')
			document.getElementById('posts').appendChild(span)
		} else {
			for (let p = 0; p < 5 | p < data.posts.length; p++) {
				let container = document.createElement('div')
				let profile_container = document.createElement('div')
				let profile_img = document.createElement('img')
				let profile_username = document.createElement('span')
				let profile_date = document.createElement('span')
				let post_content = document.createElement('p')

				profile_img.classList.add('border-[2px]', 'border-purple-700', 'rounded-full', 'w-6', 'h-6')
				profile_img.src = "/profile.png"
				profile_username.classList.add('text-sm', 'translate-y-[1.5px]')
				profile_username.innerText = "happex"

				const date = new Date(data.posts[p].miscellaneous.creation_time * 1000);

				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				const hours = date.getHours();
				const minutes = date.getMinutes();

				profile_date.innerText = `- ${zfill(day, 2)}/${zfill(month, 2)}/${year} à ${zfill(hours, 2)}h${zfill(minutes, 2)}`;
				profile_date.classList.add('text-sm', 'translate-y-[1.5px]')

				container.classList.add('bg-purple-950/25', 'px-4', 'py-4', 'space-y-4', 'md:rounded-2xl', 'max-md:border-b-2', 'max-md:border-purple-800')
				
				post_content.innerHTML = convertLinksToClickable(data.posts[p].content)
				post_content.classList.add('text-sm')

				profile_container.classList.add('flex', 'space-x-2')
				profile_container.appendChild(profile_img)
				profile_container.appendChild(profile_username)
				profile_container.appendChild(profile_date)
				container.appendChild(profile_container)
				container.appendChild(post_content)

				if (data.posts[p].files.length > 0 && data.posts[p].files[0].type == 'image') {
					let img_container = document.createElement('img')
					img_container.src = data.posts[p].files[0].thumbnail
					img_container.classList.add('rounded-2xl', 'w-full', 'md:rounded-lg')
					container.append(img_container)
				}

				document.getElementById('posts').appendChild(container)
			}
		}
	})
    .catch(error => {
        console.error('Une erreur est survenue:', error);
    });