export function Backgorund() {
    return(
        <>
      <div
        className="bg fixed h-screen w-full"
        style={{
          opacity: 0.5,
          backgroundSize: "cover",
          backgroundImage: "url('/987919.jpg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </>
    );
}