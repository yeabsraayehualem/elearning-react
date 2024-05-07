/* eslint-disable react/prop-types */


const CartedCourses = ({ img, title, desc, price }) => {
  return (
    <div className="flex justify-between my-2 border-b-[1px] h-min border-[#242424] py-2">
      <img src={img} alt="" className="rounded-md w-36" />
      <div className="px-4">
        <h2 className="font-bold">{title}</h2>
        <p className="font-light">{desc}</p>
        <p className="font-bold">$ {price}</p>
      </div>
    </div>
  );
};

export default CartedCourses;
