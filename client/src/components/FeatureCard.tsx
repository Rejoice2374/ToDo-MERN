const FeatureCard = ({
  title,
  description,
  Image,
}: {
  title: string
  description: string
  Image: string
}) => {
  return (
    <div>
      <div className="relative flex flex-col items-start justify-start overflow-hidden rounded-2xl border-2 border-black/20 transition-transform duration-300 hover:scale-105 hover:transform dark:border-white/20">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "rgba(231, 236, 235, 0.08)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />
        {/* Additional subtle gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent" />

        <div className="relative z-10 flex h-40.5 flex-col items-start justify-start gap-2 self-stretch p-6">
          <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
            <p className="self-stretch text-lg leading-7 font-normal text-foreground">
              {title} <br />
              <span className="text-muted-foreground">{description}</span>
            </p>
          </div>
        </div>
        <div className="relative z-10 -mt-0.5 h-72 self-stretch">
          <img src={Image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
