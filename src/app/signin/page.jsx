import Navbar from "../component/Navbar";
import BottomHeader from "../component/BottomHeader";
import SignInForm from "../component/SignInForm";

export default function SignInPage() {
  return (
    <div>
      <Navbar />
      <BottomHeader />
      <div className='hero-container h-[100vh] flex items-center justify-center'>
        <SignInForm />
      </div>
    </div>
  );
}
