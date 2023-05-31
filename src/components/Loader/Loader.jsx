import { MagnifyingGlass } from "react-loader-spinner";
const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="300"
      width="300"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
export default Loader;
