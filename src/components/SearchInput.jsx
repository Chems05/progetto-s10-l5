import { BiSearch } from "react-icons/bi";

const input = () => {
  return (
    <form>
      <label className="text-black m-4 ">
        <input className="text-black bg-white " type="text" />
        <BiSearch size={25} className="user-select-all" />
      </label>
    </form>
  );
};

export default input;
