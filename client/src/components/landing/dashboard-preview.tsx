import dashBoardPreview from "@/assets/habitDark.png"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-240 xl:w-290">
      <div className="rounded-2xl bg-primary/40 p-2 shadow-2xl">
        <img
          src={dashBoardPreview}
          alt="Dashboard preview"
          width={1160}
          height={700}
          className="h-full w-full rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  )
}
