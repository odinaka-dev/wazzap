import { StaticImageData } from "next/image";

// homepage imports
import aboutImage from "@/public/Img/homeImg/about-image.avif";
import crossBrowser from "@/public/Img/homeImg/cross-device-compatibility.avif";
import homeBanner1 from "@/public/Img/homeImg/homebanner1.avif";
import homeBanner2 from "@/public/Img/homeImg/homebanner2.avif";
import homeBanner3 from "@/public/Img/homeImg/homebanner3.avif";
import homepageImage from "@/public/Img/chat-concepts.avif";
import lightweight from "@/public/Img/homeImg/lightweight-fast.webp";
import privacy from "@/public/Img/homeImg/privacy.avif";
import notification from "@/public/Img/homeImg/notification.avif";
import realtime from "@/public/Img/homeImg/realtime-chat.avif";

// dashboard image imports

interface HomeImages {
  aboutImage: StaticImageData;
  crossBrowser: StaticImageData;
  homeBanner1: StaticImageData;
  homeBanner2: StaticImageData;
  homeBanner3: StaticImageData;
  homepageImage: StaticImageData;
  lightweight: StaticImageData;
  privacy: StaticImageData;
  notification: StaticImageData;
  realtime: StaticImageData;
}

// export all images
export const Images: HomeImages = {
  aboutImage,
  crossBrowser,
  homeBanner1,
  homeBanner2,
  homeBanner3,
  homepageImage,
  lightweight,
  privacy,
  notification,
  realtime,
};
