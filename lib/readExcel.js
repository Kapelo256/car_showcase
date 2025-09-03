import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

export function readExcelFile() {
  // chemin du fichier Excel (dans public ou data)
  const filePath = path.join(process.cwd(), "public", "cars.xlsx");

  // lire le fichier
  const fileBuffer = fs.readFileSync(filePath);
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });

  // on prend la 1ère feuille
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // convertir en JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  // filtrer pour ne garder que les URLs (si ta colonne s’appelle "url")
  const urls = data
    .map((row) => row.url) // ⚠️ change "url" selon le nom exact de la colonne dans ton Excel
    .filter((val) => typeof val === "string" && val.startsWith("http"));

  return urls;
}
