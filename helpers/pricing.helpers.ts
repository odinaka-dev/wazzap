import { buttonVariants } from "@/components/ui/button";

export const PRICINGHELPERS = [
  {
    title: "Free Plan",
    decription: "For individuals and small teams",
    price: "0.00$",
    features: ["up to 100 users", "Basic chat features", "Limited connections"],
    button: "Get started",
    // buttonVariant: buttonVariants({
    //   variant: "default",
    //   className: "w-full",Íß
    // }),
  },
  {
    title: "Pro Plan",
    decription: "Perfect plans for growing teams",
    price: "5$",
    features: [
      "unlimited users",
      "chat features",
      "AI assistant",
      "unlimited connections",
      "Basic Security features",
    ],
    button: "contact us",
  },
  {
    title: "Business Plan",
    decription: "Perfect plans for larger teams",
    price: "8$",
    features: [
      "unlimited users",
      "chat features",
      "Meeting scheduling",
      "Video calls",
      "AI assistant",
      "unlimited connections",
      "Advanced security",
    ],
    button: "Contact sales",
  },
];
