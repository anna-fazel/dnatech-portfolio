import './about.css'
import face from '../img/face.jpg'
import award from '../img/award.png'

const About = () => {
    return (
        <div className='about'>
           <div className="ab-left">
               <div className="ab-card"> 
                <img src={face} className='ab-img' />
               </div>
           </div>
           <div className="ab-right">
               <h1 className='ab-title'>About Me</h1>
               <p className='ab-sub'>Lorem, ipsum. lorem.</p>
               <p className='ab-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem iste voluptatum odit expedita assumenda, aliquid placeat magnam. Et, exercitationem!</p>
               <div className="ab-award">
                   <img src={award} alt="" className="ab-award-img" />
                   <div className="ab-award-text">
                       <h4 className="ab-award-title">Award Title</h4>
                       <p className="ab-award-desc">Lorem ipsum dolor sit amet consectetur.</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About

