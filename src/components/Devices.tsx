import { devices } from "@/data";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-8 h-8 md:w-10 md:h-10" />,
  Tv: <Tv className="w-8 h-8 md:w-10 md:h-10" />,
  Monitor: <Monitor className="w-8 h-8 md:w-10 md:h-10" />,
  Tablet: <Tablet className="w-8 h-8 md:w-10 md:h-10" />,
};

export default function Devices() {
  return (
    <section id="devices" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Works on Every Device
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Stream seamlessly across all your favorite devices
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {devices.map((device) => (
            <div
              key={device.name}
              className="glass-card rounded-xl p-6 md:p-8 flex flex-col items-center gap-4 text-center group cursor-default"
            >
              <div className="text-muted group-hover:text-accent transition-colors duration-500">
                {iconMap[device.icon]}
              </div>
              <span className="text-sm font-medium text-foreground">
                {device.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
