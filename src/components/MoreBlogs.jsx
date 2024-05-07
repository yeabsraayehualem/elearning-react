/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const MoreBlogs = ({ image, text, teacherPic, teacherName, description,views }) => {
  return (
    <div
      className="card-container  bg-white shadow-lg p-4"
      style={{ width: "80%" }}
    >
      <div className="h-[100%]">
        <img src={image} alt="Blog" className="card-image rounded-lg h-[60%]" />
        <div className="card-text">
          <h2 className="font-bold">{text}</h2>
          <div className="flex mt-8 ml-3">
            <img src={teacherPic} alt="prof" className="h-12 navprofile" />
            <p>
              <strong>{teacherName}</strong>{" "}
            </p>
          </div>
          <p className='mt-3'>{description}</p>

          <div className='flex justify-between'>
            <a href="#" className='text-[#696984]' style={{ textDecoration: 'none', color: '#696984' }}><u>Read More</u> </a>
            <p><span><FontAwesomeIcon icon={faEye} /></span>{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs;
