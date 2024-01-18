import Image from 'next/image'
import styles from './page.module.css'
import Home2 from '../../child1/src/app/page'
import Home3 from '../../child2/src/app/page'

export default function Home(props) {
  return (
    <>
      <div className='main' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', backgroundColor: 'lightblue', alignItems: 'center', textAlign: 'center'
      }}>
        <div>
          <Image src={'/favicon.ico'} width={20} height={20} />
        </div>
        <div>
          <ul className='listss' style={{
            display: 'flex',
            gap: '10px', listStyleType: 'none'
          }}>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Update</a>
            </li>
            <li>
              <a>Notification</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Home2 />
     { <Home3 /> } */}
    </>
  )
}
