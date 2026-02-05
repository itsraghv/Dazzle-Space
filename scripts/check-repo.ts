import { basehub } from "basehub";

async function main() {
  const result = await basehub().query({
    _sys: {
      slug: true,
      title: true,
    }
  });
  console.log("Repo details:", result);
}

main();
