/* eslint-disable react/prop-types */


const Header = ({name,nots,pic}) => {
  return (
    <>
    <div className="sticky top-0 -z-10 ">
    <div className="flex justify-between bg-blue-500 py-auto ">
        <h2 className="ml-72 text-white my-2">Hi, {name} </h2>
        <div className="flex justify-between">
            <p className="text-white">{nots}</p>
            <img src={pic} alt="" className="w-12" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Header