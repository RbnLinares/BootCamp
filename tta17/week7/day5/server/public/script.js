const products = async() => {
    try{
        const res = await fetch("http://localhost:5000/api/products/");
        const data = await res.json();
        console.log(data);
        render(data);
    }catch (error) {
        console.log(console.error(error));
    }
};
products()

const render = (arr) => {
    const html = arr.map(item => {
        return `<div style="
        display: inline-block;
        border: 1px solid #000;
        margin: 20px;
        tex-aling: center;
        padding: 20px;
        ">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        </div>`;
    });
    document.getElementsByID("shop").innerHTML = gtml.join("");
};

const searchProduct = e => {
    e.preventDefault();
    const name = e.target.name.value;
    fetch("http://localhost:5000/api/search?name=" + name)
    .then(res => res.json())
    .then(data => {
        render(data)
    })
    .catch ((e) => {
        console.log(e);
    });
};

const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.name.value;

    fetch("http://localhost:5000/api/products/", {
        method: 'POST',
        Headers: {
            'content - type': "application/json",
        },
        body: JSON.stringify({ name:price}),
    })
    .then((res) => res.json())
    .then((data) => {
        render(data);
    })
    .catch((err) => {
        console.log(err);
    });
}