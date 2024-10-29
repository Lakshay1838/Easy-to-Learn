import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'


export default function ImagesSection(){
    return(
        <div className='imageSection ps-20 bg-slate-400'>
            <div className="border-2 max-w-lg inline-block mx-16 my-10 border-none">
                <img className='rounded-2xl'  src= {img1} alt="" />
            </div>
            <div className="border-2 max-w-lg inline-block mx-16 my-10 border-none">
                <img className='rounded-2xl' src= {img2} alt="" />
            </div>
        </div>
    );
}