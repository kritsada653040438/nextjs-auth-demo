"use client";

import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextLogo from '../../public/custom-logo.png';
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Container>
        <Navbar session={session} />
        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-5xl font-bold text-red-800">Welcome to DishDash!</h3>
          <p className="text-xl mt-4 text-gray-700 max-w-2xl mx-auto">
            Discover quick and easy meal options that fit your busy lifestyle. Our platform allows you to explore a variety of delicious dishes, perfect for any occasion. Whether you're looking for a quick breakfast, a satisfying lunch, or a delightful dinner, we've got you covered!
          </p>
          
          {/* Call to Action Button */}
          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
              Start Exploring
            </button>
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
