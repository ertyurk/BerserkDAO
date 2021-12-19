import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0ED726F94A5DF3df3f1cBc80AE1ACb50533ce161",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Behelit",
        description: "This NFT will give you access to BerserkDAO!",
        image: readFileSync("scripts/assets/behelit.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()