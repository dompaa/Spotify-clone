import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
//import { spotifyApi} from '../lib/spotify' locally initialize

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
        // if equals to refresh token, we push it to sign in page, manual sign in from the beginning
        // refresh token attempt fails, redirect user to login
        if(session.error === 'RefreshAccessTokenError') {
            signIn();
        }
        //setting the access token for the API 
        //singleton pattern
        spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
