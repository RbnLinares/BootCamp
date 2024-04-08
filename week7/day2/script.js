// function getjoke() {
//     const url = 'https://jokes-always.p.rapidapi.com/erJoke';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2bb76f4167mshaabd4d38648cf04p1e08a4jsn2053dbc40afa',
// 		'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
// 	}
// };
// fetch(url, options)
// .then ((res)=>{
//     return res.json();
// })
// .then((joke)=>{
//     console.log(joke.data);
// })
// }
// getjoke();

const handlesubmit = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    postAUser (name, username, email);
}
const postAUser = async (name, username, email) =>{
    let url = 'https://users-18kl.onrender.com/userjson'
    let options = {
        method: 'POST',
        header: {
            'content-type': 'aplication/Json',
        },
        body: JSON.stringify({name, username, email})
    };
    try {
        const res = await fetch(url,options);
        const data = await res.json();
        let html = data.map((item)=>{
            return `<div>${item.name}</div>`;
        });
        document.getElementById('root').innerHTML = html.join("");
    }catch(err){
        console.log(err);
    }
};