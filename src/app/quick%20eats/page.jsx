"use client"
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function QuickEats() {

  const { data: session } = useSession();
  if (!session) redirect("/login");
  console.log(session)

  return (
    <main>
      <Container>
        <Navbar session={session} />
        <div className="flex-grow text-center p-10">
          {/* แบนเนอร์แนะนำ QuickEats */}
          <h1 className="text-3xl font-bold mb-4">QuickEats - อาหารทำง่าย รวดเร็วทันใจ</h1>
          <p className="text-lg text-gray-600 mb-8">รวมเมนูอาหารที่ทำได้ง่ายและรวดเร็ว ไม่ต้องใช้เวลานาน!</p>
    
          {/* รายการอาหาร QuickEats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* การ์ดแสดงเมนูอาหาร */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/easy-dish.jpg" alt="Easy Dish" className="rounded-lg mb-4"/>
              <h2 className="text-xl font-semibold mb-2">ข้าวผัดไข่</h2>
              <p className="text-gray-600 mb-4">ทำง่ายใน 10 นาที</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">ดูสูตร</button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/simple-noodle.jpg" alt="Simple Noodle" className="rounded-lg mb-4"/>
              <h2 className="text-xl font-semibold mb-2">บะหมี่กึ่งสำเร็จรูป</h2>
              <p className="text-gray-600 mb-4">ทำใน 5 นาที</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">ดูสูตร</button>
            </div>

            {/* เพิ่มการ์ดเมนูเพิ่มเติมตามต้องการ */}
          </div>

        </div>
        <Footer />
      </Container>
    </main>
  );
}
