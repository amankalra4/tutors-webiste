export const cmsBaseURL = "https://tutors-website.prismic.io/api/v2";

export const getCMSDataURL = (refId: string) => {
  return `${cmsBaseURL}/documents/search?ref=${refId}#format=json`;
};

export const headerImageText = "Learn with Elite";

const commonURL = "https://images.prismic.io/tutors-website";

export const logo = `${commonURL}/8450c071-8adb-4d24-9a30-9991c8a5bec4_Tutors+logo.jpg?auto=compress,format`;

export const backgroundHomeImage = `${commonURL}/7a6f0a5f-2e39-4e54-a22a-1438841690b9_home-page-background.webp?auto=compress,format`;

export const phonePayImage = `${commonURL}/ac617b02-3262-428f-bc0d-c6ccf1fbd432_phonepay.png?auto=compress,format`;

export const googlePayImage = `${commonURL}/ae46d858-0f1d-4222-94ca-92bcd472d8de_google-pay.jpg?auto=compress,format`;
