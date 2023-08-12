import { FadeLoader } from "react-spinners";
function Loading() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <FadeLoader
        color="#ffffff"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
