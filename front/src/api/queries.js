import {GET_SYSTEM_INFO_URL} from "./URLs";

export let getNavLinks = async (lang) => {
    // let response = await fetch(NAV_LINKS_URL);
    let response = await fetch(GET_SYSTEM_INFO_URL);
    let links = await response.json();
    return links || [];
};
