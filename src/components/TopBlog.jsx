
import PropTypes from 'prop-types';

const TopBlog = (props) => {
  const { name, comp, title, description,image } = props;

  return (
    <div className="bg-[#e5e5e7] block md:flex justify-between p-12 ">
      <div className='order-1 md:order-2 w-auto md:w-[50%]'>
        <img src={image} alt="" className="h-64" />
      </div>
      <div className="px-5 w-auto md:w-[50%] order-2 lg:order-1">
        <p className="font-semibold text-[18px] mb-2">By: {name} in <span className="text-[#49BBBD]">{comp}</span></p>
        <h2 className="font-bold text-[36px] mb-2">{title}</h2>
        <p className="text=[#696984] text-[18px] mb-2" >{description}</p>
        <button className="rounded-lg border bg-[#49BBBD] px-10 font-bold h-12 text-white">Start learning now</button>
      </div>

      
    </div>
  );
};

TopBlog.propTypes = {
  name: PropTypes.string.isRequired,
  comp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
};

export default TopBlog;
