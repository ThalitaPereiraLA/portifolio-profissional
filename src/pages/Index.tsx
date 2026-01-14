import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GitHubStats />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Interests />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
