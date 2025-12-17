import Spinner from "@/components/Spinners/Spinner";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner type="beat" size={60} />
    </div>
  );
}
