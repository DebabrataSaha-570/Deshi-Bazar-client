import CommonLayout from "@/app/(withCommonLayout)/layout";
import React from "react";
import Container from "../Container";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: "https://img.icons8.com/sf-regular/96/0a525b/star.png",
      heading: "Top Rank Farms",
      subHeading:
        "Our farms are ranked among the best, ensuring the highest quality produce.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/0a525b/external-success-business-and-finance-tanah-basah-basic-outline-tanah-basah.png",
      heading: "Organic Certificated",
      subHeading:
        "Certified organic by leading authorities, guaranteeing natural and healthy products.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/ios/100/0a525b/lightning-bolt--v1.png",
      heading: "Fast Delivery",
      subHeading:
        "Quick and reliable delivery services to ensure freshness of your precious order.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/ios-filled/100/0a525b/double-tick.png",
      heading: "Trusted Products",
      subHeading:
        "Our products are trusted by thousands of customers for their quality and reliability.",
    },
  ];
  return (
    <Container className="px-8 my-16">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuresData.map((feature, index) => (
          <FeaturesCard key={index} feature={feature}></FeaturesCard>
        ))}
      </section>
    </Container>
  );
};

export default Features;
