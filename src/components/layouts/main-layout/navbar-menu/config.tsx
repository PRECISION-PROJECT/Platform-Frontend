import { Icons } from "@/assets/icons";
import { ROUTES } from "@/utils/routes";

export const foods = [
  {
    title: "Dessert",
    icon: <Icons.cake className="mb-4 size-6" />,
    description: "Sweet treats to satisfy your cravings.",
  },
  {
    title: "Pizza",
    icon: <Icons.pizza className="mb-4 size-6" />,
    description: "Delicious, cheesy slices of goodness.",
  },
  {
    title: "Sandwich",
    icon: <Icons.sandwich className="mb-4 size-6" />,
    description: "Classic and hearty fast food options.",
  },
  {
    title: "Coffee",
    icon: <Icons.coffee className="mb-4 size-6" />,
    description: "Your go-to boost of caffeine.",
  },
  {
    title: "Ice Cream",
    icon: <Icons.iceCream className="mb-4 size-6" />,
    description: "Cold, creamy delights for any mood.",
  },
  {
    title: "Fruit",
    icon: <Icons.grape className="mb-4 size-6" />,
    description: "Fresh and healthy natural snacks.",
  },
];

export const travelMenuItems = [
  {
    title: "Destinations",
    icon: <Icons.mapPin className="mb-4 size-6" />,
    description: "Discover amazing places to visit.",
  },
  {
    title: "Hotels",
    icon: <Icons.hotel className="mb-4 size-6" />,
    description: "Find the best stays for your trips.",
  },
  {
    title: "Flights",
    icon: <Icons.plane className="mb-4 size-6" />,
    description: "Get deals and tips on air travel.",
  },
  {
    title: "Packing",
    icon: <Icons.package className="mb-4 size-6" />,
    description: "Essential checklists for stress-free packing.",
  },
  {
    title: "Activities",
    icon: <Icons.smile className="mb-4 size-6" />,
    description: "Exciting things to do wherever you go.",
  },
  {
    title: "Travel Tips",
    icon: <Icons.backpack className="mb-4 size-6" />,
    description: "Make every trip smooth and memorable.",
  },
];

export const NAV_LINKS = [
  {
    title: "HOME",
    href: ROUTES.HOME,
  },
  {
    title: "PRODUCTS",
    href: ROUTES.PRODUCTS,
  },
  {
    title: "SERVICES",
    href: ROUTES.SERVICES,
  },
  {
    title: "APPOINTMENTS",
    href: ROUTES.APPOINTMENTS,
  },
  {
    title: "BLOGS",
    href: ROUTES.BLOGS,
  },
  {
    title: "CONTACT",
    href: ROUTES.CONTACT,
  },
];
