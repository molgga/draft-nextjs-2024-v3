"use client";
import { Button } from "@ui/components/ui/button";
import { useSampleModal } from "../hooks/use-sample-modal";

export function SampleRhfB() {
  console.log("SampleRhfB");
  const modalTest = useSampleModal();

  const handleOpenModal = () => {
    modalTest.open();
  };

  modalTest.onClosed((result) => {
    console.log("modalTest.onClosed:", result);
  });

  return (
    <div>
      <Button onClick={handleOpenModal}>open</Button>
    </div>
  );
}
