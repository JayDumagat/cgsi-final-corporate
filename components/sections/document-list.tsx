import { Download } from "lucide-react";
import { documents } from "@/content/documents";
export function DocumentList({
  group,
}: {
  group: "individual" | "corporate" | "client";
}) {
  return (
    <div>
      {documents
        .filter((d) => d.group === group)
        .map((doc) => (
          <a className="ed-document" key={doc.href} href={doc.href}>
            <div>
              <h3>{doc.title}</h3>
              <span>{doc.format} · Download from CGSI’s document host</span>
            </div>
            <Download size={19} aria-hidden="true" />
          </a>
        ))}
    </div>
  );
}
