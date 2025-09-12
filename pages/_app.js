import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout"; // make sure this path is correct

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Exclude layout for homepage
  const noLayoutRoutes = ["/", "/tokenomics", "/usecases", "/whitepaper"]; // add more paths here if needed
  const isNoLayout = noLayoutRoutes.includes(router.pathname);

  return isNoLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
