import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

// Define the type for each breadcrumb object
interface Breadcrumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({
  bgColour = "bg-white",
}: {
  bgColour?: string;
}) {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Function to lowercase and format breadcrumb text
    const formatBreadcrumb = (str: string): string => {
      return str
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toLowerCase());
    };

    if (router) {
      // Split pathname into array of strings
      const pathnames = router.pathname.split("/").filter((x) => x);
      // Create array of breadcrumb objects
      const breadcrumbArray = pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return { name: formatBreadcrumb(pathname), path: routeTo };
      });

      // Add home breadcrumb
      breadcrumbArray.unshift({ name: "home", path: "/" });
      setBreadcrumbs(breadcrumbArray);
    }
  }, [router]);

  return (
    <section className={`breadcrumbs w-full flex justify-center ${bgColour}`}>
      <nav
        className="breadcrumbs-nav w-11/12 max-w-screen-xl py-8"
        aria-label="breadcrumb"
      >
        <ol className="flex flex-wrap breadcrumb-parent-container">
          {breadcrumbs.map((breadcrumb, index) => (
            <ScrollAnimation animateIn="fadeIn" delay={index * 200}>
              <li className="" key={index}>
                <Link
                  className="text-sm sm:text-base md:text-lg lg:text-xl primary-font"
                  href={breadcrumb.path}
                  passHref
                >
                  {breadcrumb.name}
                </Link>

                {/* Add separator if not last breadcrumb */}
                {index < breadcrumbs.length - 1 && (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#5bc5b7" }}
                    className="mx-4"
                  />
                )}
              </li>
            </ScrollAnimation>
          ))}
        </ol>
      </nav>
    </section>
  );
}
