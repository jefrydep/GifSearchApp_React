const getGifs = async(category)=>{



    const URL = `https://api.giphy.com/v1/gifs/search?api_key=5Dbr0z9EokqK718UOrN2bqu7ebWIOwQ2&q=${category}&limit=10`;
    const resp = await fetch(URL);
    const {data}= await resp.json();
const gifs = data.map((img)=>
    ({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url

    })
);



console.log(gifs)
return gifs;


}
export default getGifs;
