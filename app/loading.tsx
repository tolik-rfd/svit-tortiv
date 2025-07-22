import { SpinnerCircle } from "@/shared/ui/spinner";

export default function Loading() {
  return (
    <div className="flex w-screen items-center justify-center p-4">
      <SpinnerCircle />
    </div>
  );
}
