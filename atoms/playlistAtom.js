import { atom } from "recoil";

//to store globally we need something like redux/context api/ 
//in this case, recoil (state management library)

export const playlistState = atom ({
    key: "playlistState",
    default: null,
})

export const playlistIdState = atom ({
    key: "playlistIdState",
    default: null
    //"0L2Icq6mlycSwiqvwXiQL2"
})