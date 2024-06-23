import { db, Place } from "astro:db";

export default async function seed() {
  await db.insert(Place).values([
    {
      id: 1,
      name: "らーめん 鴨 to 葱",
      nameRoman: "Ramen Kamo to Negi",
      rating: 7,
      review: "Not yet tasted, this is test data.",
      image:
        "https://static.wixstatic.com/media/1815be_19fa69539bc14c7282f353d1600ba8c6~mv2.jpg/v1/fill/w_1480,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1815be_19fa69539bc14c7282f353d1600ba8c6~mv2.jpg",
      website: "https://www.kamotonegi.com/",
      address: "6 Chome-4-15 Ueno, Taito City, Tokyo 110-0005",
      gmaps: "https://maps.app.goo.gl/1ntouh3EjEs52RXy8",
      city: "Taitō",
      state: "Tōkyō",
      country: "Japan",
      tags: "ramen,duck",
      video: "https://www.instagram.com/p/C3nchNIv-lX/",
    },
    {
      id: 2,
      name: "鉄板焼き ゑびす",
      nameRoman: "Teppanyaki Yebisu",
      image: "https://imgfp.hotp.jp/IMGH/85/69/P043428569/P043428569_480.jpg",
      website: "https://www.hotpepper.jp/strJ003694063/",
      address: "1 Chome-1-10 Nanbanaka, Naniwa Ward, Osaka, 556-0011",
      gmaps: "https://maps.app.goo.gl/5tUksejctdHcwsoTA",
      city: "Ōsaka",
      state: "Ōsaka",
      country: "Japan",
      tags: "teppanyaki,wagyu",
      video: "https://www.instagram.com/p/C3zrewIvump/",
      needsReserve: true,
    },
  ]);
}
