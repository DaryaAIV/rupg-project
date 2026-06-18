addEventListener("DOMContentLoaded", () => {

    const model = Model();
    const render = Renderer();

    async function initApp() {
        try{
            await model.loadPageData();
            const currData = model.getPageData();
            render.renderPage(currData);
        }
        catch(error) {
            console.error("Could not load Page:",error );
        }
    }

    initApp();
    document.querySelector("#btn-generate").addEventListener("click", initApp);
    document.querySelector("#btn-save").addEventListener("click", () => {
        model.saveUserPage();
    })


});