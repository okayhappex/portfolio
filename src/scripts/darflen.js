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
	const boldRegex = /\*\*(.*?)\*\*/g;
	const italicRegex = /\*(.*?)\*/g
	const underlineRegex = /\_(.*?)\_/g
	const stripedRegex = /\~\~(.*?)\~\~/g
	const maskedRegex = /\|\|(.*?)\|\|/g
	const codeRegex = /\`(.*?)\`/g
	const mtlCodeRegex = /\`\`\`(.*?)\`\`\`/g
    
    let newText = text.replace(linkRegex, function(link) {
        return `<a href="${link}" target="_blank" class="text-purple-800">${link}</a>`;
    });

	newText = newText.replace(boldRegex, `<b>$1</b>`);
	newText = newText.replace(italicRegex, `<i>$1</i>`);
	newText = newText.replace(underlineRegex, `<u>$1</u>`);
	newText = newText.replace(stripedRegex, `<s>$1</s>`);
	newText = newText.replace(maskedRegex, `$1`);
	newText = newText.replace(codeRegex, `<pre>$1</pre>`);
	newText = newText.replace(mtlCodeRegex, `<code>$1</code>`);

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
				let profile_date = document.createElement('span')
				let post_content = document.createElement('p')

				const date = new Date(data.posts[p].miscellaneous.creation_time * 1000);

				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				const hours = date.getHours();
				const minutes = date.getMinutes();

				profile_date.innerText = `${zfill(day, 2)}/${zfill(month, 2)}/${year} à ${zfill(hours, 2)}h${zfill(minutes, 2)}`;
				profile_date.classList.add('text-xs', 'text-center', 'mx-auto', 'translate-y-[1.5px]')

				container.classList.add('bg-purple-950/25', 'p-6', 'space-y-4', 'md:rounded-2xl', 'md:p-4', 'max-md:border-b', 'max-md:border-purple-800/20')
				
				post_content.innerHTML = convertLinksToClickable(data.posts[p].content)
				post_content.classList.add('text-sm')

				profile_container.classList.add('text-xs', 'text-center', 'space-x-2')
				profile_container.appendChild(profile_date)

				if (data.posts[p].group && data.posts[p].group.visibility == 'public') {
					let sep = document.createElement('span')
					sep.innerText = '|'

					let grp_content = document.createElement('a')
					grp_content.innerText = data.posts[p].group.display_name
					grp_content.href = `https://darflen.com/communities/${data.posts[p].group.name}`
					grp_content.classList.add('text-purple-800', 'font-semibold')

					// profile_container.classList.add('space-x-2')
					profile_container.appendChild(sep)
					profile_container.appendChild(grp_content)
				}

				container.appendChild(profile_container)
				container.appendChild(post_content)

				if (data.posts[p].files.length > 0 && data.posts[p].files[0].type == 'image') {
					let img_container = document.createElement('img')
					img_container.src = data.posts[p].files[0].thumbnail
					img_container.classList.add('rounded-2xl', 'w-full', 'md:rounded-lg')

					container.appendChild(img_container)
				}

				document.getElementById('posts').appendChild(container)
			}
		}
	})
    .catch(error => {
        console.error('Une erreur est survenue:', error);
    });