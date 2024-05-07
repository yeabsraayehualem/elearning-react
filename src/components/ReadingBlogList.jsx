/* eslint-disable react/prop-types */


const ReadingBlogList = ({ image, text, id }) => {
  return (
    <div className="card-container">
      <div className='h-[100%]'>
 <img src={image} alt="Blog" className="card-image h-[327px]" />
      </div>
       
     
      <div className="card-text -mt-24 mb-2 text-center ">
       
      <a href={`#${id}`} className='blogsbtn w-36 px-4 rounded-md  font-bold' style={{ textDecoration: 'none', color: 'black' }}>{text}</a>
      </div>
    </div>
  );
};

export default ReadingBlogList;
