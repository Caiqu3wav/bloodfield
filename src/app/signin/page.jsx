import Navbar from "../component/Navbar";
import BottomHeader from "../component/BottomHeader";
import SignInForm from "../component/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className='hero-container h-full flex items-center justify-center'>
        <SignInForm />
      </div>
    </div>
  );
}
