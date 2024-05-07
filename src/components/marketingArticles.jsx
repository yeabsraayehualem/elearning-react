/* eslint-disable react/prop-types */
import { faDollarSign,faClockFour } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import courseTypeIcon from '../assets/images/courseTypeIcon.png';

const MarketingArticles = ({ image, text, teacherPic, teacherName, description,type,duration,prevPrice,curPrice }) => {
    return (
      <div
        className="card-container  bg-white shadow-lg p-4 mr-3 ml-3"
        style={{ width: "95%" }}
      >
        <div className="h-[100%]">
          <img src={image} alt="Blog" className="card-image rounded-lg h-[60%]" />
          <div className="card-text">
            <div className='flex justify-between'>
                <p><img src={courseTypeIcon} alt="" className="inline-flex mr-2" /> <span className="italic font-light">{type}</span> </p>
                <p><span><FontAwesomeIcon icon={faClockFour} className='text-[#49BBBD]'/> </span>{duration}</p>
            </div>
            <h2 className="font-bold">{text}</h2>
            
            <p className='mt-3'>{description}</p>
  
            <div className='flex justify-between'>
            <div className="flex mt-8 ml-3">
              <img src={teacherPic} alt="prof" className="h-12 navprofile" />
              <p>
                <strong>{teacherName}</strong>{" "}
              </p>
            </div>
              <p className="mt-8"> <span className='line-through italic'><span ><FontAwesomeIcon icon={faDollarSign} />{prevPrice}</span></span> <span className="text-2xl font-bold text-[#48bdb7]"><FontAwesomeIcon icon={faDollarSign} />{curPrice}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default MarketingArticles