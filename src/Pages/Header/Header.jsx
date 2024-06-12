import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
        <h1 className="text-3xl text-center font-bold">Chiitagong Export Input Industry</h1>
        <p className="text-xl text-center font-semibold">
        {" "}
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
        
      <div className="flex gap-2 items-cent max-w-xl mx-auto">
      <button className="px-5 py-2  bg-[#D72050] text-white rounded">
    UPDATE
      </button>
      <Marquee pauseOnHover={true}>
      Youngone Corporation is a leading global manufacturer of outdoor/ athletic clothing, textiles, footwear and gear built with a history of innovation, partnership and trust.
      </Marquee>
    </div>
        </div>
    );
};

export default Header;