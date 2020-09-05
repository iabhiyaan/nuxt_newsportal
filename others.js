export const MAIN_URL = "http://sajha.webhouse.com.np";

export function createSEOMeta({ description, title, image }) {
  const fullImage__Path = `${MAIN_URL}/images/main/${image}`;
  return [
    {
      hid: "inner-description",
      name: "description",
      content: description
    },
    {
      hid: "title",
      name: "title",
      content: title
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    {
      name: "twitter:description",
      content: description
    },
    { name: "twitter:image", content: fullImage__Path },
    // Facebook OpenGraph
    { property: "og:title", content: title },
    { property: "og:site_name", content: "Mulkikhabar" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: fullImage__Path },
    {
      property: "og:description",
      content: description
    }
  ];
}
