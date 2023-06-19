import { AiOutlineShopping }from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6  mt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} My Shopping Site. All rights reserved.
        </p>
        <div className="flex items-center justify-center my-5" >
            <p className="text-center text-md pt-2 pr-2" > IremShopping </p>
          <AiOutlineShopping size={25} className=""/>
        </div>

      </div>
    </footer>
  )
}

export default Footer;