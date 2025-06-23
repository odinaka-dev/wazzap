import {
  HiDevicePhoneMobile,
  HiChatBubbleLeftRight,
  HiShieldCheck,
  HiBolt,
  HiBell,
  HiUsers,
} from "react-icons/hi2";

export const SERVICESHELPERS = [
  {
    serviceLabel: "Device Compatibility",
    serviceDescriptionL:
      "Wazzap works seamlessly across all your devices - smartphone, tablet, desktop, and web browsers. Switch between devices without losing your conversations or missing important messages.",
    serviceImg: HiDevicePhoneMobile,
    iconColor: "#3B82F6", // Blue
  },
  {
    serviceLabel: "Realtime Chat",
    serviceDescriptionL:
      "Experience instant messaging with real-time delivery, read receipts, typing indicators, and live presence status. Connect with friends and colleagues without any delays.",
    serviceImg: HiChatBubbleLeftRight,
    iconColor: "#10B981", // Green
  },
  {
    serviceLabel: "Privacy and Security",
    serviceDescriptionL:
      "Your conversations are protected with end-to-end encryption, secure authentication, and privacy controls. Chat with confidence knowing your data is safe and secure.",
    serviceImg: HiShieldCheck,
    iconColor: "#F59E0B", // Amber
  },
  {
    serviceLabel: "Lightweight and Fast",
    serviceDescriptionL:
      "Optimized for speed and performance with minimal resource usage. Enjoy lightning-fast message delivery, quick app startup, and smooth scrolling even on older devices.",
    serviceImg: HiBolt,
    iconColor: "#EF4444", // Red
  },
  {
    serviceLabel: "Smart Notifications",
    serviceDescriptionL:
      "Stay updated with intelligent notifications that adapt to your schedule. Customize notification preferences, mute conversations, and never miss important messages.",
    serviceImg: HiBell,
    iconColor: "#8B5CF6", // Purple
  },
  {
    serviceLabel: "Group Collaboration",
    serviceDescriptionL:
      "Create groups, channels, and team spaces for seamless collaboration. Share files, organize discussions, assign roles, and manage large conversations with advanced group features.",
    serviceImg: HiUsers,
    iconColor: "#06B6D4", // Cyan
  },
];
