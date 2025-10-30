import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const LiveEmbed = () => {
  return (
    <section id="live-app" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the <span className="text-primary">Live App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try Merafong Streams right now. No download required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden glass card-shadow glow">
            {/* App Preview Badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Live Preview</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </div>

            {/* Iframe Container */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://merafong-streams.base44.app"
                className="absolute top-0 left-0 w-full h-full"
                style={{ minHeight: "600px" }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Merafong Streams Live App"
              />
            </div>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6 text-muted-foreground"
          >
            This is a live embed of the Merafong Streams player. Explore playlists and discover new music.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveEmbed;
