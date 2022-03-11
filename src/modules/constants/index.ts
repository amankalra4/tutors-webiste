export const cmsBaseURL = "https://tutors-website.prismic.io/api/v2";

export const getCMSDataURL = (refId: string) => {
    return `${cmsBaseURL}/documents/search?ref=${refId}#format=json`
}

const commonURL = "https://images.prismic.io/tutors-website";

export const homePageImage = `${commonURL}/d03573a9-8eff-4238-9e96-14334da0987f_tutor+home+logo.jpg?auto=compress,format`;

export const logo = `${commonURL}/8450c071-8adb-4d24-9a30-9991c8a5bec4_Tutors+logo.jpg?auto=compress,format`;

export const backgroundHomeImage = `${commonURL}/7a6f0a5f-2e39-4e54-a22a-1438841690b9_home-page-background.webp?auto=compress,format`;
