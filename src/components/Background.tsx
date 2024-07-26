
export function Backgorund() {
    return(
        <>
      <div
        className="bg fixed h-screen w-full"
        style={{
          opacity: 0.6,
          backgroundSize: "cover",
          backgroundImage: "url('/bg.jpg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </>
    );
}