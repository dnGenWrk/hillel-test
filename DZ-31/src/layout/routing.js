const currentAppState = {
    _category: "",
    _product: "",
    isFormOpened: false,
    orderList: false,

    get category() { return this._category },
    setCategory(newValue) {
        const hasChanged = newValue !== this._category;
        this._category = newValue;

        return hasChanged;
    },

    get product() { return this._product },
    setProduct(newValue) {
        const hasChanged = newValue !== this._product;
        this._product = newValue;

        return hasChanged;
    }
};

function renderContent() {
    const parsedUrl = new URLSearchParams(document.location.search);

    if (currentAppState.setCategory(parsedUrl.get("category"))) {
        appLayout.updateProductsListSection(currentAppState.category, productSections);
    }

    if (currentAppState.setProduct(parsedUrl.get("productid"))) {
        appLayout.updateProductInfoSection(currentAppState.product);
    }

}

window.addEventListener("popstate", (e) => {
    renderContent();
});