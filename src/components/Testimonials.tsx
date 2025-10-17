import { motion } from "framer-motion";
import { Star, Music } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Music Enthusiast",
    avatar: "SJ",
    content: "Merafong Streams has completely changed how I discover music. The recommendations are incredibly accurate and I've found so many amazing artists!",
    rating: 5,
  },
  {
    name: "DJ Marcus",
    role: "Professional DJ",
    avatar: "DM",
    content: "As a DJ, I need access to a vast library of music. Merafong Streams delivers with millions of tracks and the offline mode is perfect for gigs.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Indie Artist",
    avatar: "EC",
    content: "The artist dashboard is fantastic! I can easily upload my music, track my streams, and connect with fans. It's been a game-changer for my career.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Podcast Creator",
    avatar: "MB",
    content: "Not just for music! I use Merafong Streams for my podcast and the platform makes distribution so easy. Highly recommend for content creators.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Fitness Instructor",
    avatar: "LA",
    content: "Perfect for my workout classes! The curated playlists keep my students motivated and the sound quality is top-notch.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Music Student",
    avatar: "JW",
    content: "As a music student, I appreciate the vast catalog and high-quality streaming. It's like having a entire music library in my pocket!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-primary">Artists & Fans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about Merafong Streams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 card-shadow transition-smooth"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Music className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">
              Join <span className="text-primary font-bold">50 million+</span> happy listeners worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
