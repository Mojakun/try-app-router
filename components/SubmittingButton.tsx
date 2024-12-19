import { ReactElement } from "react";

export function SubmittingButton(): ReactElement {
  return (
    <button className="bg-blue-500 text-white p-2 rounded opacity-50" disabled>
      Submitting...
    </button>
  );
}
