import { motion } from "framer-motion";
import { UserPlus, Search, ListMusic, Headphones } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in seconds. No credit card required to start.",
  },
  {
    icon: Search,
    title: "Discover Music",
    description: "Browse millions of songs, albums, and curated playlists from every genre.",
  },
  {
    icon: ListMusic,
    title: "Create Playlists",
    description: "Build your perfect playlist with your favorite tracks and organize your library.",
  },
  {
    icon: Headphones,
    title: "Enjoy Anywhere",
    description: "Stream on any device or download for offline listening on the go.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with Merafong Streams in four simple steps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 rounded-2xl glass card-shadow flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-2">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 glass rounded-2xl p-8 card-shadow ${index % 2 === 1 ? 'text-right' : ''}`}>
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-32 ${index % 2 === 0 ? 'left-16' : 'right-16'} w-px h-24 bg-gradient-to-b from-primary/50 to-transparent`} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
