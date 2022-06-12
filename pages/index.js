
import { getSession } from 'next-auth/react';
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
 
      <main className='flex'>
        <Sidebar/>
        <Center/>
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>

    
    </div>
  )
}

export async function getServerSideProps(context) {
 const session = await getSession(context);
  //pre-render the user on the server which will give the access token before hitting the client 
  // issue with not giving the default key value after login - glitch FIXED
 return {
   props: {
     session
   }
 }
}
