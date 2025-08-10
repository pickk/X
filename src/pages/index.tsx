import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import StickyScrollLock from "@/components/StickyScrollLock.tsx";
import '/src/styles/fixed-y.css';

export default function IndexPage() {
  return (
      <>
          <StickyScrollLock/>
      <section className="fixed-y">
        <div className="inline-block max-w-lg text-center justify-center z-[99999]">
            <span className={title({ className: "relative z-[99999]" })}>Welcome to&nbsp;</span>
          <span className={title({ size: "lg", color: "violet" })}>China&nbsp;</span>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
                color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
        <div style={{ position: 'absolute', top: 12000 }}>123312132123</div>

      </>
  );
}
