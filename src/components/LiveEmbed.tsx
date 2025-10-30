import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import screenshot1 from "@/assets/app-screenshot-1.jpg";
import screenshot2 from "@/assets/app-screenshot-2.jpg";
import screenshot3 from "@/assets/app-screenshot-3.jpg";
import screenshot4 from "@/assets/app-screenshot-4.jpg";
import screenshot5 from "@/assets/app-screenshot-5.jpg";

const LiveEmbed = () => {
  const screenshots = [
    { src: screenshot1, alt: "Merafong Streams Player Interface" },
    { src: screenshot2, alt: "Discover Playlists and Albums" },
    { src: screenshot3, alt: "Artist Profiles and Top Tracks" },
    { src: screenshot4, alt: "Search and Explore Music" },
    { src: screenshot5, alt: "Your Personal Music Library" },
  ];

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
            Experience <span className="text-primary">Merafong Streams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful interface designed for music lovers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-2xl overflow-hidden glass card-shadow glow">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6 text-muted-foreground"
          >
            Browse through screenshots of Merafong Streams. Discover playlists, explore artists, and enjoy your music library.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveEmbed;
