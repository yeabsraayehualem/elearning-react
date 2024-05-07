

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center text-center ">
  <div className="w-64 flex text-center justify-between mt-12 text-white">
    <div className="mr-10">Logo</div>
    <div className="borleft pl-10 mb-12"> 
      <h3><strong>Vitual class for zoom</strong></h3>
    </div>
  </div>
  <h2 className="text-[#B2B3CF] mt-6">Subscribe to get our newsletter</h2>
  <div className="my-5 flex justify-between">
  <input type="text" placeholder="Your Email" className="bg-transparent border border-[#83839A] inputradius px-4 py-2" />
  <button className="ml-5 inputradius border bg-[#49BBBD] px-10 font-bold text-white">Subscribe</button>

  </div>
  <div className="flex justify-evenly text-[#B2B3CF]">
  <div className="flex">
  <p className="px-3 border-r border-[#626381]">Careers</p>
  <p className="px-3 border-r border-[#626381]">Privacy & Policy</p>
  <p className="px-3">Terms & Conditions</p>
</div>
  </div>
  <div className="flex justify-center border-t border-[#626381] py-4">
    
      <p className="text-[#626381]"> © {currentYear} Copyright</p>
    </div>
</div>

  )
}

export default Footer