import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import expertsData from "../../../json/categories.json";

const Experts = () => {
  return (
    <div id="experts" className="py-10 px-4 bg-gray-50">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">OUR EXPERTS</h1>
      </div>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {expertsData.map((expert, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-4"
              >
                <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h2 className="text-lg font-semibold text-gray-900">
                    {expert.name}
                  </h2>
                  <p className="text-sm text-gray-500">{expert.occupation}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default Experts;
