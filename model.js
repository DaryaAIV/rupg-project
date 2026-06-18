const Model = function () {
    let _userData = {};

    async function loadPageData() {
        const pokemonId = Math.floor(Math.random() * 1025) + 1;
        const [usersData, kanyeData, pokeData, baconData] = await Promise.all([
            fetch('https://randomuser.me/api/?results=7').then(r => r.json()),
            fetch('https://api.kanye.rest').then(r => r.json()),
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(r => r.json()),
            fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1').then(r => r.json())
        ]);
        const friendsArr = usersData.results.slice(1);

       _userData = {
        mainUser: {
            name: usersData.results[0].name.first +" " + usersData.results[0].name.last,
            city: usersData.results[0].location.city,
            state: usersData.results[0].location.state,
            picture: usersData.results[0].picture.large
        },
        kanyeQuote: kanyeData.quote,
        pokemon: {
            name: pokeData.name,
            image: pokeData.sprites.front_default
        },
        aboutMe: baconData[0],
        friends: []
       };

       // loop through the sliced friends array and push their full names to user data
       for (let i = 0; i < friendsArr.length; i++){
        _userData.friends.push(friendsArr[i].name.first +" " + friendsArr[i].name.last);
       }
        
    }
    function getPageData(){
        return _userData;
    }
    return{
        loadPageData: loadPageData,
        getPageData: getPageData
    };
};