interface author {
	id: string,
	profile: {
		username: string,
		display_name: string,
		description: string,
        images: {
			icon: {
				thumbnail: string,
				medium: string,
				large: string
			},
			banner: {
				thumbnail: string,
				medium: string,
				large: string,
			}
        },
        status: string
    },
    stats: {
        posts: number,
        followers: number,
        following: number,
        loves: number,
        communities: number
    },
    miscellaneous: {
        administrator: boolean,
        user_verified: boolean,
        user_bug_hunter: boolean,
        user_banned: boolean,
        creation_time: number
    }
}

interface group {}


interface darfpost {
	id: string,
	content: string,
	files: Array<{
		type: string,
		thumbnail: string,
		medium: string,
		large: string
	}>,
	audience: string,
	edited: boolean,
	pinned: boolean,
	author: author,
	stats: {
		loves: number,
		reposts: number,
		comments: number,
		views: number
	},
	miscellaneous: {
		creation_time: number
	},
	group?: any // TODO
}

const headers = new Headers();
headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0');

async function fetchDarflenAPI(): Promise<any> {
    try {
        const response = await fetch('https://api.darflen.com/users/softblackx/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API Darflen:', error);
        throw error;
    }
}

function zfill(str: string, width: number) {
	str = str.toString()
    const len = str.length;

    if (len >= width) {
        return str;
    }

    const padding = '0'.repeat(width - len);
    return padding + str;
}

function convertLinksToClickable(text: string): string {
    const linkRegex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;
	const boldRegex = /\*\*(.*?)\*\*/g;
	const pingRegex = /@(\w+)/g;
	const hashtagRegex = /#(\w+)/g;
	const communityRegex = /%(\w+)/g;
	const italicRegex = /\*(.*?)\*/g;
	const underlineRegex = /\_(.*?)\_/g;
	const stripedRegex = /\~\~(.*?)\~\~/g;
	const maskedRegex = /\|\|(.*?)\|\|/g;
	const codeRegex = /`([^`]+)`/g;
	const mtlCodeRegex = /```([\s\S]*?)```/g;

    let newText = text.replace(linkRegex, function(link) {
        return `<a href="${link}" target="_blank" class="text-purple-700">${link}</a>`;
    });

	newText = newText.replace(pingRegex, function(username) {
        return `<a href="https://darflen.com/users/${username}" target="_blank" class="text-purple-700">@${username}</a>`;
    });

	newText = newText.replace(hashtagRegex, function(hashtag) {
        return `<a href="https://darflen.com/hashtags/${hashtag}" target="_blank" class="text-purple-700">#${hashtag}</a>`;
    });

	newText = newText.replace(communityRegex, function(community) {
        return `<a href="https://darflen.com/communities/${community}" target="_blank" class="text-purple-700">~${community}</a>`;
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
			span.innerHTML = "Il n'y a rien d'intéressant à voir, allez voir <a href='https://darflen.com/softblackx' target='_blank' class='text-purple-600'>Darflen</a>."
			span.classList.add('text-center', 'text-white/50', 'w-full')
			document.getElementById('posts')?.classList.add('block')
			document.getElementById('posts')?.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2')
			document.getElementById('posts')?.appendChild(span)
		} else {
			for (let p = 0; p < 3 && p < data.posts.length; p++) {
				let container = document.createElement('div')
				let profile_container = document.createElement('div')
				let profile_date = document.createElement('span')
				let post_content = document.createElement('p')

				let post: darfpost = data.posts[p]

				const date = new Date(post.miscellaneous.creation_time * 1000);

				const year = date.getFullYear().toString();
				const month = (date.getMonth() + 1).toString();
				const day = date.getDate().toString();
				const hours = date.getHours().toString();
				const minutes = date.getMinutes().toString();

				profile_date.innerText = `${zfill(day, 2)}/${zfill(month, 2)}/${year} à ${zfill(hours, 2)}h${zfill(minutes, 2)}`;
				profile_date.classList.add('select-none', 'text-xs', 'text-center', 'mx-auto', 'translate-y-[1.5px]')

				container.classList.add('backdrop-blur-xl', 'bg-white/25', 'rounded-3xl', 'h-auto', 'p-6', 'space-y-4', 'self-start', 'md:rounded-2xl', 'md:p-4') //, 'max-md:border-b', 'max-md:border-purple-800/20')
				
				post_content.innerHTML = convertLinksToClickable(post.content)
				post_content.classList.add('text-sm')

				profile_container.classList.add('text-xs', 'text-center', 'space-x-2')
				profile_container.appendChild(profile_date)

				if (post.group && post.group.visibility == 'public') {
					let sep = document.createElement('span')
					sep.innerText = '|'
					sep.classList.add('select-none')

					let grp_content = document.createElement('a')
					grp_content.innerText = post.group.display_name
					grp_content.href = `https://darflen.com/communities/${post.group.name}`
					grp_content.classList.add('text-purple-700', 'font-semibold')

					// profile_container.classList.add('space-x-2')
					profile_container.appendChild(sep)
					profile_container.appendChild(grp_content)
				}

				container.appendChild(profile_container)
				container.appendChild(post_content)

				if (post.files.length > 0 && post.files[0].type == 'image') {
					let img_link = document.createElement('a')
					let img_container = document.createElement('img')

					img_container.src = post.files[0].thumbnail
					img_link.href = post.files[0].thumbnail

					img_container.classList.add('rounded-lg', 'w-full', 'md:rounded-lg')
					img_link.classList.add('block', 'w_full')


					img_link.appendChild(img_container)
					container.appendChild(img_link)
				}

				document.getElementById('posts')?.appendChild(container)
			}
		}
	})
    .catch(error => {
        console.error('Une erreur est survenue:', error);
    });