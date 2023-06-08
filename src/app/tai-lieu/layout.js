import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <Header />
        <nav></nav>
        <div className="bg-[#fff]">
   
   <main className="mx-auto flex max-w-7xl p-6 lg:px-8">
     <div className="w-[20%] flex flex-col">
       <div href="/about/ban-giam-hieu" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Văn bản
       </div>
       <div href="/about/cac-to-trong-truong" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Dề thi, đáp án
       </div>
       <div href="/about/dang-bo-nha-truong" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Phần mềm tiền ích
       </div>
       <div href="/about/doan-thanh-nien" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Thời khóa biểu
       </div>
       
       
     </div>
     {children}
   </main>
  
 </div>
        <Footer />
      </section>
    );
  }