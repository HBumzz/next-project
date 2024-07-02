import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Introduce from "../components/Introduce";
import Consulting from "../components/Consulting.js";

export default function Home() {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
        <Hero />
      <Layout>
        <Introduce />
        <Feature />
        <Pricing />
        <Consulting />
      </Layout>
    </>
  );
}
