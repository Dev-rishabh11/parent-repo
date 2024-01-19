import Image from "next/image";
import styles from "./page.module.css";
import React from "react";


interface IHome {
  components: IComponent
}

interface IComponent {
   name: string 
}
const Home: React.FC<IHome> = ({components}: IHome) => {
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
            {components((component: { name: any }) => (
              <li>
                {component.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
