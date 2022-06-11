import { atom } from "recoil";


//what track is selected
export const currentTrackIdState = atom({
    key: "currentTrackIdState", //unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

//isplaying; true/false
export const isPlayingState = atom ({
    key: "isPlayingState",
    default: false,
})