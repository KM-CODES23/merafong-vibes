import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";
import qrCode from "@/assets/qr-code.png";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-primary">Merafong Streams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available on all your favorite platforms. Start listening today.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-6">Get the app now</h3>
              
              <div className="space-y-4">
                {/* App Store Button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-16 text-left hover:scale-105 transition-smooth hover:glow"
                  asChild
                >
                  <a href="https://merafong-streams.base44.app" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-8 w-8 mr-4" />
                    <div>
                      <div className="text-xs text-muted-foreground">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                </Button>

                {/* Google Play Button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-16 text-left hover:scale-105 transition-smooth hover:glow"
                  asChild
                >
                  <a href="https://merafong-streams.base44.app" target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="h-8 w-8 mr-4" />
                    <div>
                      <div className="text-xs text-muted-foreground">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                </Button>
              </div>

              {/* Additional Platforms */}
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-3">Also available on:</p>
                <div className="flex flex-wrap gap-3">
                  {["Windows", "macOS", "Linux", "Web"].map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 glass rounded-lg text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="glass rounded-2xl p-8 card-shadow">
                <img
                  src={qrCode}
                  alt="Download QR Code"
                  className="w-64 h-64 rounded-xl"
                />
              </div>
              <p className="mt-6 text-muted-foreground text-center">
                Scan to download on your mobile device
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: "50M+", label: "Downloads" },
              { value: "4.8★", label: "Average Rating" },
              { value: "100+", label: "Countries" },
              { value: "#1", label: "Music App" },
            ].map((stat, index) => (
              <div key={index} className="text-center glass rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
