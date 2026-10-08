const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "src/lib/public.functions.ts");
let content = fs.readFileSync(file, "utf8");

const helper = `
function replaceAwan(data: any): any {
  if (!data) return data;
  return JSON.parse(JSON.stringify(data).replace(/Awan/g, "Rafique").replace(/awan/g, "rafique"));
}
`;

content = content.replace(/export const getServices =/g, helper + "\nexport const getServices =");

content = content.replace(
  /return \(data \?\? \[\]\) as unknown as Service\[\];/g,
  "return replaceAwan((data ?? []) as unknown as Service[]);",
);
content = content.replace(
  /return \(row \?\? null\) as unknown as Service \| null;/g,
  "return replaceAwan((row ?? null) as unknown as Service | null);",
);
content = content.replace(
  /return \(data \?\? \[\]\) as unknown as Project\[\];/g,
  "return replaceAwan((data ?? []) as unknown as Project[]);",
);
content = content.replace(
  /return \(row \?\? null\) as unknown as Project \| null;/g,
  "return replaceAwan((row ?? null) as unknown as Project | null);",
);

const oldHomepageReturn = `    return {
      page: (page ?? null) as unknown as SitePage | null,
      sections: (sectionsResult.data ?? []) as unknown as PageSection[],
      services: (servicesResult.data ?? []) as unknown as Service[],
      projects: (projectsResult.data ?? []) as unknown as Project[],
    };`;
const newHomepageReturn = `    return replaceAwan({
      page: (page ?? null) as unknown as SitePage | null,
      sections: (sectionsResult.data ?? []) as unknown as PageSection[],
      services: (servicesResult.data ?? []) as unknown as Service[],
      projects: (projectsResult.data ?? []) as unknown as Project[],
    });`;
content = content.replace(oldHomepageReturn, newHomepageReturn);

content = content.replace(
  /return \(row \?\? null\) as unknown as SeoSetting \| null;/g,
  "return replaceAwan((row ?? null) as unknown as SeoSetting | null);",
);

const oldCustomPageReturn = `    return {
      page: page as unknown as SitePage,
      sections: (sections ?? []) as unknown as PageSection[],
    };`;
const newCustomPageReturn = `    return replaceAwan({
      page: page as unknown as SitePage,
      sections: (sections ?? []) as unknown as PageSection[],
    });`;
content = content.replace(oldCustomPageReturn, newCustomPageReturn);

content = content.replace(/return settings;/g, "return replaceAwan(settings);");

fs.writeFileSync(file, content);
console.log("Modified public.functions.ts");
