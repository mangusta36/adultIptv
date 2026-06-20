interface Channel {
  name: string;
  file: string;
}

const row1: Channel[] = [
  { name: "Brazzers", file: "/images/channels/brazzers.svg" },
  { name: "Vixen", file: "/images/channels/vixen.png" },
  { name: "BangBros", file: "/images/channels/bangbros.png" },
  { name: "Reality Kings", file: "/images/channels/realitykings.png" },
  { name: "Naughty America", file: "/images/channels/naughtyamerica.png" },
  { name: "Blacked", file: "/images/channels/blacked.png" },
  { name: "Tushy", file: "/images/channels/tushy.png" },
  { name: "Deeper", file: "/images/channels/deeper.svg" },
];

const row2: Channel[] = [
  { name: "Mofos", file: "/images/channels/mofos.png" },
  { name: "Digital Playground", file: "/images/channels/digital-playground.svg" },
  { name: "Twistys", file: "/images/channels/twistys.svg" },
  { name: "TeamSkeet", file: "/images/channels/teamskeet.png" },
  { name: "Girlsway", file: "/images/channels/girlsway.svg" },
  { name: "Adult Time", file: "/images/channels/adult-time.svg" },
  { name: "Wicked", file: "/images/channels/wicked.svg" },
  { name: "Playboy Plus", file: "/images/channels/playboyplus.png" },
];

function ChannelLogo({ channel }: { channel: Channel }) {
  const isSvg = channel.file.endsWith(".svg");
  return (
    <div className="flex items-center justify-center h-16 px-6 rounded-xl bg-white/[0.03] border border-white/[0.06] shrink-0">
      {isSvg ? (
        <img
          src={channel.file}
          alt={`${channel.name} logo`}
          className="max-h-8 w-auto brightness-0 invert"
          loading="lazy"
        />
      ) : (
        <img
          src={channel.file}
          alt={`${channel.name} logo`}
          className="max-h-8 w-auto"
          loading="lazy"
        />
      )}
    </div>
  );
}

function ChannelLogoRow({
  channels,
  direction,
}: {
  channels: Channel[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-5 w-max ${
          direction === "left"
            ? "animate-cin-scroll group-hover:animate-paused"
            : "animate-cin-scroll-reverse group-hover:animate-paused"
        }`}
      >
        {[...channels, ...channels].map((channel, i) => (
          <div
            key={`${channel.name}-${i}`}
            className="transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <ChannelLogo channel={channel} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChannelShowcase() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.01] to-background pointer-events-none" />

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="container text-center mb-14 md:mb-18">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Channel Lineup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Premium Adult Channels Included
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Access the world&apos;s most popular premium adult channels with
            crystal-clear HD, FHD, and 4K streaming quality.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="space-y-6">
            <ChannelLogoRow channels={row1} direction="left" />
            <ChannelLogoRow channels={row2} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
