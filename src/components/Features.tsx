import { motion } from "framer-motion";
import { Infinity, Download, Sparkles, Radio, Share2 } from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Unlimited Streaming",
    description: "Listen to millions of songs without any limits. Stream your favorite tracks anytime, anywhere.",
  },
  {
    icon: Download,
    title: "Offline Mode",
    description: "Download your favorite playlists and enjoy music on the go, even without internet connection.",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "AI-powered algorithm learns your taste and suggests new music you'll love.",
  },
  {
    icon: Radio,
    title: "Artist Dashboard",
    description: "For artists: Upload tracks, track analytics, and connect directly with your fans.",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Share your favorite tracks and playlists with friends across all social platforms.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Merafong Streams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate music streaming experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 card-shadow transition-smooth hover:glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
