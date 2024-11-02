"use client"

// import BlogItem from "@/Components/BlogItem";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* <BlogItem /> */}
      <BlogList />
      <Footer />
    </>
  );
}
