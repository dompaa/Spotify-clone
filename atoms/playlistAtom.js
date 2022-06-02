import { atom } from "recoil";

//to store globally we need something like redux/context api/ 
//in this case, recoil (state management library)

export const playlistAtom = atom ({
    key: "playlistAtomState",
    default: null,
})

export const playlistIdState = atom ({
    key: "playlistIdState",
    default: "0L2Icq6mlycSwiqvwXiQL2"
})