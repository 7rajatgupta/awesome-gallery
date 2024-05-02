import Link from "next/link";
import { fileUrls } from "~/utils/mock";
const mockImages = fileUrls.map((url, idx) => ({ id: idx, url }));
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="gallery-image" />
          </div>
        ))}
      </div>
    </main>
  );
}
