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
        <main className="mx-auto flex max-w-7xl p-6 lg:px-8 flex-col">
          <h1 className="text-lg font-bold text-blue-800 mb-4">Hình ảnh liên quan các hoạt động của trường</h1>
          {children}
        </main>
      </div>
      <Footer />
    </section>
  );
}
