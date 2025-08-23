
import StickyScrollLock from "@/components/StickyScrollLock.tsx";
import '/src/styles/fixed-y.css';
import MyNavbar from "@/components/navbar.tsx";
import TranslucentBox from "@/components/cube.tsx";

export default function IndexPage() {
  return (
      <>
          <MyNavbar />
      <StickyScrollLock/>
      <section className="fixed-y">
        <div className="inline-block max-w-lg text-center justify-center">
            <TranslucentBox/>
        </div>
      </section>
          <div style={{ position: 'relative', top: 12322 }}>123312132123</div>
      </>
  );
}
