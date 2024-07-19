import Modal from "@/components/Modal";
import Photo from "@/components/Photo";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <Photo id={params.id} />
    </Modal>
  );
}
