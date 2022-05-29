import users from '../../data/users.json';


export default defineEventHandler((event) => {
	return users
})

// export default async (req, res) => {
// 	const users = await $fetch(users);

//  return users; 

// }


