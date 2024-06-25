const url = 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '03d3f0dba2msh1db9d4bdc567e34p1fc5a2jsn909834374518',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}