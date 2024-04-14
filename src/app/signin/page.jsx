import Navbar from "../component/Navbar";
import BottomHeader from "../component/BottomHeader";
import SignInForm from "../component/SignInForm";

export default function SignInPage() {
  return (
    <div>
      <Navbar />
      <BottomHeader />
      <div className='hero-container min-h-[500px] flex items-center justify-center'>
        <SignInForm />
      </div>
    </div>
  );
}
