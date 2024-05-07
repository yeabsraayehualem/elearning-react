/* eslint-disable react/prop-types */
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CartedCourse from "../assets/images/CartedCourse.png";
import Paypal from "../assets/images/Paypal.png";
import Moreblogs2 from "../assets/images/moreblogs2.png";

import Mastercard from "../assets/images/mastercard.png";
import AmericanExpress from "../assets/images/AmericanExpress.png";
import Visa from "../assets/images/Visa.png";
import CartedCourses from "../components/CartedCourses";

const CheckOut = ({ tax }) => {
  const cartedCourses = [
    {
      img: CartedCourse,
      title: "adipising elit, sed do eiusmod tempor",
      desc: "Lorem ipsum dollar...",
      price: "24.96",
      couponDiscount: 0,
    },
    {
      img: CartedCourse,
      title: "adipising elit, sed do eiusmod tempor",
      desc: "Lorem ipsum dollar...",
      price: "24.96",
      couponDiscount: 0,
    },
  ];

  const subtotalPrice = cartedCourses.reduce((total, course) => {
    return total + parseFloat(course.price);
  }, 0);

  const couponDiscount = cartedCourses.reduce((total, course) => {
    return total + parseFloat(course.couponDiscount);
  }, 0);

  const total = (
    subtotalPrice -
    subtotalPrice * (couponDiscount / 100) +
    subtotalPrice * (tax / 100)
  ).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="flex justify-between my-6">
        <div className="mx-12 w-auto shadow-md shadow-[#ccc] px-8 py-5 rounded-lg ">
          <div>
            <h2 className="font-bold text-[24px]">Check out</h2>
            <h2 className="font-light text-[12px]">Cant pay</h2>
          </div>
          <div className="flex mt-2">
            <button className="w-12 mx-2 border-[1px] rounded-md px-2 border-[#cbcccc]">
              <img src={Paypal} alt="paypal" />
            </button>
            <button className="w-12 mx-2 border-[1px] rounded-md px-2 border-[#cbcccc]">
              <img src={AmericanExpress} alt="AE" />
            </button>
            <button className="w-12 mx-2 border-[1px] rounded-md px-2 border-[#cbcccc]">
              <img src={Mastercard} alt="Master Card" />
            </button>
            <button className="w-12 mx-2 border-[1px] rounded-md px-2 border-[#cbcccc]">
              <img src={Visa} alt="Visa" />
            </button>
          </div>
          <div className="my-4">
            <div className="my-2">
              <label>Name on card</label>
              <input
                type="text"
                placeholder="Enter name on card"
                className="inputstyle rounded-md ml-3 px-3 w-full h-12"
              />
            </div>
            <div className="my-2">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="Enter Card Number"
                className="inputstyle rounded-md ml-3 px-3 w-full h-12"
              />
            </div>
            <div className="flex justify-between my-2">
              <div className="mr-4">
                <label>Expiration Date</label>
                <input
                  type="date"
                  placeholder="Expiration date"
                  className="inputstyle rounded-md ml-3 px-3 w-full h-12"
                />
              </div>
              <div>
                <label>CVC</label>
                <input
                  type="text"
                  placeholder="Enter CVC"
                  className="inputstyle rounded-md ml-3 px-3 w-full h-12"
                />
              </div>
            </div>
            <div className="my-2">
              <input
                type="checkbox"
                placeholder="Enter Card Number"
                className="inputstyle rounded-md ml-3 px-3 "
              />
              <label className="text-[#7e7e7e]">
                Save my information for faster checkout{" "}
              </label>
            </div>
            <div className="px-3">
              <button className=" bg-[#49BBBD] w-full py-2 text-white text-center rounded-lg">
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#e7edf5] w-auto h-96 rounded-lg mr-12 px-4 ">
          <h2 className=" text-24">Summery</h2>
          {cartedCourses.map((item) => (
            <CartedCourses
              key={item.index}
              img={item.img}
              price={item.price}
              title={item.title}
              desc={item.desc}
            />
          ))}
          <div className="flex justify-between px-3 border-b-[1px] border-[#242424]">
            <h4 className="font-bold text-gray-600">Subtotal </h4>
            <h4>$ {subtotalPrice}</h4>
          </div>
          <div className="flex justify-between px-3 border-b-[1px] border-[#242424]">
            <h4 className="font-bold text-gray-600">Coupon Discount </h4>
            <h4>{couponDiscount} %</h4>
          </div>
          <div className="flex justify-between px-3 border-b-[1px] border-[#242424]">
            <h4 className="font-bold text-gray-600">Tax </h4>
            <h4>{tax} %</h4>
          </div>
          <div className="flex justify-between px-3 border-b-[1px] border-[#242424]">
            <h4 className="font-bold">Total </h4>
            <h4>$ {total}</h4>
          </div>
        </div>
      </div>

      <div className="my-4 mt-12 mx-12">
        <h2 className=" font-bold text-[18px]">
          Top Education offers and deals are listed here
        </h2>
        <div className="flex justify-between">
          <div className="relative w-96">
            <img src={Moreblogs2} alt="" className="rounded-md h-64" />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-md h-full">
              <div className="bg-[#49BBBD] w-fit text-white p-2 rounded-md top-12 left-12">
                <p className="font-bold">50% </p>
              </div>

              <p className="w-64">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
