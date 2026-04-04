import { createClient, OAuthStrategy } from "@wix/sdk";
import { members } from "@wix/members";
import { posts, categories } from "@wix/blog";

export const wixClient = createClient({
  modules: {
    members,
    posts,
    categories,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID as string,
  }),
});

export function getWixImageUrl(wixImage: string) {
  if (!wixImage) return "";

  const base = wixImage.split("#")[0]; // remove metadata
  const path = base.replace("wix:image://v1/", "");

  return `https://static.wixstatic.com/media/${path}`;
}

// mport { items } from '@wix/data';
// import { createClient, OAuthStrategy } from '@wix/sdk';

// //To access the Wix APIs, create a client with the createClient() function imported from the @wix/sdk package.
// const myWixClient = createClient({
//   modules: { items },
//   auth: OAuthStrategy({ clientId: '763ca3d8-a1eb-4cf6-8fa5-3fd269340d0b' }),
// });

// const dataItemsList = await myWixClient.items.query('Locations/Locations').find();

// console.log('My Data Items:');
// console.log('Total: ', dataItemsList.items.length);
// console.log(dataItemsList.items
//   .map((item) => item.data._id)
//   .join('\n')
// );
