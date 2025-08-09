import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import StickyScrollLock from "@/components/StickyScrollLock.tsx";

export default function IndexPage() {
  return (
      <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <StickyScrollLock/>
        <div className="inline-block max-w-lg text-center justify-center zIndex:1">
          <span className={title()}>Welcome to&nbsp;</span>
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
