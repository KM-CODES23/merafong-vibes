import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual listeners",
    features: [
      "Ad-supported streaming",
      "Standard audio quality",
      "On-demand playback",
      "Shuffle play mode",
      "Mobile & desktop apps",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "For the ultimate music experience",
    features: [
      "Ad-free listening",
      "High-quality audio (320kbps)",
      "Unlimited skips",
      "Offline downloads",
      "Exclusive content & releases",
      "Artist dashboard access",
      "Multi-device streaming",
      "Lyrics & behind the scenes",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative glass rounded-2xl p-8 card-shadow transition-smooth ${
                plan.popular ? 'border-2 border-primary glow' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground"
        >
          All plans include access to our mobile, desktop, and web apps.{" "}
          <a href="#" className="text-primary hover:underline">Compare plans</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
