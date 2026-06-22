addEventListener("DOMContentLoaded", () => {

    const model = Model();
    const render = Renderer();

    async function initApp() {
        try {
            await model.loadPageData();
            const currData = model.getPageData();
            render.renderPage(currData);
        }
        //handle the error by displaying a user friendly message on the UI
        catch (error) {
            console.error("Could not load Page:", error);
            render.renderError(`We couldn't fetch the data from the servers.<br> Don't worry! You can still access and load all your saved users offline`)
        }
    }

    function updateDropdownOpt() {
        const savedUsers = model.getAllSavedUsers();
        render.renderDropdown(savedUsers);
    }

    function loadSelectedUser() {
        const selectedName = document.querySelector("#saved-users-dropdown").value;

        if (!selectedName || selectedName === "") {
        return;
    }
        model.loadSavedPage(selectedName);
        const currData = model.getPageData();
        render.renderPage(currData);
    }

    initApp();
    updateDropdownOpt();

    document.querySelector("#btn-generate").addEventListener("click", initApp);

    document.querySelector("#btn-save").addEventListener("click", () => {
        model.saveUserPage();
        updateDropdownOpt();
    });

    document.querySelector("#saved-users-dropdown").addEventListener("change", loadSelectedUser);
});