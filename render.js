const Renderer = function () {

    function renderMainUser(mainUser) {
        const container = document.querySelector("#main-user-container");
        container.innerHTML = `<img src="${mainUser.picture}" alt="user picture">
                                <h2>${mainUser.name}</h2>
                                <h2>${mainUser.city}, ${mainUser.state} </h2>`;
    }

    function renderQuote(quote) {
        const container = document.querySelector("#quote-container");
        container.innerHTML = `<h2>Favorite quote:</h2>
                                <p>"${quote}"</p>
                                <p>- Kanye West</p>`;
    }

    function renderPokemon(pokemon) {
        const container = document.querySelector("#pokemon-container");
        container.innerHTML = `<img src="${pokemon.image}" alt="pokemon image">
                                <h3>${pokemon.name} </h3>`;
    }

    function renderAboutMe(text) {
        const container = document.querySelector("#about-me-container");
        container.innerHTML = `<h2>About me:</h2>
                                <p>${text}</p>`;
    }

    //generates an HTML list of friends and injects it into the container
    function renderFriends(friendsList) {
        const container = document.querySelector("#friends-container");
        let friendsStr = "";
        for (let i = 0; i < friendsList.length; i++) {
            friendsStr += `<li>${friendsList[i]}</li>`;
        }
        container.innerHTML = friendsStr;
    }

    function renderDropdown(usersObj) {
        const container = document.querySelector("#saved-users-dropdown");
        let usersStr = `<option value=""hidden>Saved Users</option>`;
        // for in loop iterates through the object keys, saved usernames
        for (const userName in usersObj) {
            usersStr += `<option value = "${userName}">${userName}</option>`;
        }
        container.innerHTML = usersStr;
    }

    function renderPage(data) {
        renderMainUser(data.mainUser);
        renderQuote(data.kanyeQuote);
        renderPokemon(data.pokemon);
        renderAboutMe(data.aboutMe);
        renderFriends(data.friends);
    }

    function renderError(errorMessage){
        const container = document.querySelector("#main-user-container");
        container.innerHTML =`<div class="error-box">
                                <h3>Error! Something went wrong</h3>
                                <p>${errorMessage}</p>
                                </div>`;
    }
    return {
        renderPage: renderPage,
        renderDropdown: renderDropdown,
        renderError: renderError
    };
};