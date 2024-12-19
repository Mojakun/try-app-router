import { PropsWithChildren, ReactElement } from "react";

export function Container({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
