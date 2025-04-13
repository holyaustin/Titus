import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Header from "@/components/ui/header";


export default function AppIndex() {


  return (

    <html lang="en">
      <body
        className={` bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">

 
        <Header />
       <PageIllustration />
      <Hero />
{/**
   */}
        </div>
      </body>
    </html>


  );
}