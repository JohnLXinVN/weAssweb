import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    count: "12",
    current: false,
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <Header />
      <main className="mx-auto flex max-w-7xl p-6 lg:px-8">
        <div className="w-[20%] flex flex-col">
          <a href="#tintuc" className="px-3 py-3 cursor-pointer hover:text-green-500">
            Tin tức, sự kiên
          </a>
          <a href="#thongbao" className="px-3 py-3 cursor-pointer hover:text-green-500">
            Thông báo
          </a>
          <a href="#hoatdong" className="px-3 py-3 cursor-pointer hover:text-green-500">
            Hoạt động
          </a>
          <a href="#truongxua" className="px-3 py-3 cursor-pointer hover:text-green-500">
            Trường xưa
          </a>
          <a href="#guongmat" className="px-3 py-3 cursor-pointer hover:text-green-500">
            Gương mặt tiêu biểu
          </a>
          
        </div>
        <div className="w-[80%] bg-red-600">
          <div id="tintuc">
            <h3 className="bg-[#1e3c9d] text-white px-2 py-1">
              Tin tức, sự kiện
            </h3>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
           
           
          </div>
          <div id="thongbao">
            <h3 className="bg-[#1e3c9d] text-white px-2 py-1">
              Thông báo
            </h3>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
           
           
          </div>
          <div id="hoatdong">
            <h3 className="bg-[#1e3c9d] text-white px-2 py-1">
              Hoạt động
            </h3>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
           
           
          </div>
          <div id="truongxua">
            <h3 className="bg-[#1e3c9d] text-white px-2 py-1">
              Trường xưa
            </h3>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
           
           
          </div>
          <div id="guongmat">
            <h3 className="bg-[#1e3c9d] text-white px-2 py-1">
              Gương mặt tiêu biểu
            </h3>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
            <div className="p-3 flex border-b-2">
              <img src="http://yendinh1.edu.vn/data/tmp/news_282_dap-an-thi-tot-nghiep-2016-1744_400-0.jpg" alt="" className="w-[200px] h-[200px]"/>
              <p className="ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora, quod facilis aliquam natus laboriosam! Id, vitae quo earum aspernatur asperiores veniam laborum ratione molestiae deserunt modi dignissimos consequatur cumque.</p>
            </div>
           
           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
