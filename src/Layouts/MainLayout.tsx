import { Footer, Header } from "@/Components/Landing";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
