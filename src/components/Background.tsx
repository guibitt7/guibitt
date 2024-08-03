export function Backgorund() {
    return(
        <>
      <div
        className="bg fixed h-screen w-full"
        style={{
          opacity: 0.4,
          backgroundSize: "cover",
          backgroundImage: "url('/bg5.jpg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </>
    );
}