import Image from "next/image";

export default function WhyChooseUs() {
  const whyChoose = [
    {
      id: 1,
      images: "/WhyChooseUs/why1.png",
      title: "Our burgers",
      Subtitle:
        "At Fazfood , we only use quality ingredients and treat them with care! We flame grill our steaks, and by using open kitchens we ensure that guests can always follow the process.",
    },
    {
      id: 2,
      images: "/WhyChooseUs/why2.png",
      title: "Your opinion is important",
      Subtitle:
        "We take all constructive feedback seriously, and we would love along with our staff – to spend every single day making Fasfood even better! Send your feedback on your experience with us here.",
    },
    {
      id: 3,
      images: "/WhyChooseUs/why3.png",
      title: "CHICKEN BURGERS",
      Subtitle:
        "At Fazfood, we want to make sure that everyone can get their hands on a good burger. Go hunting in our versatile burger menu there is something for every taste and for all sizes!",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-destructive text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Why Choose us
        </h3>
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          BURGERS MADE WITH LOVE AND CARE
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {whyChoose.map((content) => (
          <div
            key={content.id}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-52 sm:w-52 md:h-56 md:w-56">
              <Image
                src={content.images}
                alt={content.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="space-y-2 px-3">
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {content.Subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
