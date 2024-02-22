"use client";
import CollectionSection from "src/components/CollectionSection/CollectionSection";
import LandingPage from "src/components/LandingPage/LandingPage";

import { useAuthentication } from "src/lib/hooks/use-authentication";


const Home = () => {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated)
    return (
        <LandingPage />
    );

  return (
    <>
      <CollectionSection />
    </>
  );
};

export default Home;
