import PricingCard from "../components/PricingCard";



export const pricingPlans = [
  {
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
  },
  {
    title: "Monthly",
    price: 6,
    description: "For growing teams",
    isPopular: true,
    url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited porn",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
  },
  {
    title: "Yearly",
    price: 99,
    description: "Upgrade to save more!",
    isPopular: false,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
    ],
  },
]


const PricingSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl capitalize">Pricing</h1>
      <h2 className="pt-3 mb-8 text-3xl font-extrabold">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div className="grid items-center max-w-screen-xl grid-cols-1 gap-3 mx-auto mt-10 md:grid-cols-3">
        {
          pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection;