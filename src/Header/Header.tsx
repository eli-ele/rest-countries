import Group from '../assets/icon/Group3.png'
 
const Header = ({ onClick }: any) => {
  
  return (
      <div>
          <header >
             <p>Where in the world?</p>
           <div className='icon'>
             <img onClick={onClick} className=' moon ' src={ Group } ></img> Dark Mode
           </div>
        </header>
    </div>
  )
}

export default Header