const SocialMedia = Object.freeze({
  // FACEBOOK defines constants for Facebook
  FACEBOOK: {
    name: "Facebook",
    iconFamily: "fab",
    iconName: "facebook",
    urlShareLink: "https://www.facebook.com/sharer/sharer.php?u=",
  },

  // LINKEDIN defines constants for LinkedIn
  LINKEDIN: {
    name: "LinkedIn",
    iconFamily: "fab",
    iconName: "linkedin-in",
    urlShareLink: "https://www.linkedin.com/shareArticle?mini=true&url=",
  },

  // TWITTER defines constants for Twitter
  TWITTER: {
    name: "Twitter",
    iconFamily: "fab",
    iconName: "twitter",
    urlShareLink: "http://www.twitter.com/share?url=",
  },

  // EMAIL defines constants for Email messages
  EMAIL: {
    name: "Email",
    iconFamily: "fas",
    iconName: "envelope",
    urlShareLink: "mailto:",
  },
});

module.exports = SocialMedia;
