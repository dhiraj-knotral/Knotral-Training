import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SolutionProvidersForm from "@/components/SolutionProviderForm/SolutionProviderForm";
import React from "react";

export default async function SolutionProvidersPage() {
  return (
    <div>
      <Header />
      <SolutionProvidersForm />
      <Footer />
    </div>
  );
}