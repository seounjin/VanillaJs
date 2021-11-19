

export const init = onRouteChange => {

    window.addEventListener('ROUTE_CHANGE', () => {
        onRouteChange();
    });

};

export const routeChange = (url, params) => {

    history.pushState(null ,null, url);
    window.dispatchEvent(new CustomEvent('ROUTE_CHANGE', params))
};