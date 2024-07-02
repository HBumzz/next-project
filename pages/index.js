import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Introduce from "../components/Introduce";

export default function Home() {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Introduce />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
