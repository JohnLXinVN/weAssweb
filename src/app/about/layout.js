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
       <a href="/about/ban-giam-hieu" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Ban giám hiệu
       </a>
       <a href="/about/cac-to-trong-truong" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Các tổ trong trường
       </a>
       <a href="/about/dang-bo-nha-truong" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Đảng bộ nhà trường
       </a>
       <a href="/about/doan-thanh-nien" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Đoàn thanh niên
       </a>
       <a href="/about/cong-doan-nha-truong" className="px-3 py-3 cursor-pointer hover:text-green-500">
         Công đoàn nhà trường
       </a>
       
     </div>
     {children}
   </main>
  
 </div>
        <Footer />
      </section>
    );
  }