import { createClient } from "@/utils/supabase/server";
import { SignInButton, SignUpButton } from "@/components/auth-buttons";
import { UserDropdown } from "@/components/home/user-dropdown";
import { Hero } from "@/components/home/hero";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import AutonomousTestingComponent from "@/components/autonomous/autonomous";
import HowItWorks from "@/components/how/howitworks";
import ObservabilityFeatures from "@/components/observatibility/features";
import WhyUsSection from "@/components/whyus/whyus";
import TestimonialSection from "@/components/testimonial/testimonial";
// import VisaPrepAIRedesign from "@/components/home/hero";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-between w-full ">
      <div className="w-full">
        {/* <div className="flex justify-center w-full px-2">
          <div className="flex flex-row shadow-xl rounded-2xl mt-3 w-full max-w-7xl justify-between items-center gap-3 p-3 bg-white bg-opacity-50"> 
           
            <a href="/" className="flex items-center font-extrabold italic text-2xl"> 
            <Image 
              src='/images/headerImg.png'
              alt="Logo"
              width={40}
              height={40}
              className="mr-1"
            />
            Visa<div className="text-blue-500">Prep</div>AI 
            </a>
            
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <a href="/blogs" className="h-10 rounded-xl border p-2 bg-orange-200 shadow-xl ">FAQ</a>
              {!user && <SignInButton/> }
              {!user && <SignUpButton/> }
              {user && <UserDropdown/> }
            </div>
          </div>
        </div> */}
      </div>

      <Hero user={user} />
      <AutonomousTestingComponent />
      <HowItWorks />
      <ObservabilityFeatures />
      <WhyUsSection />
      <TestimonialSection />
    </div>
  );
}
