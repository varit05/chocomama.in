const getSocialLinks = () => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    const socialLinkRef = firebase.database().ref("socialLinks");
    const socialLinks = [];
    socialLinkRef.once("value", snapshot => {
      socialLinks.push({ ...snapshot.val() });
    });
    dispatch({ type: "SOCIAL_LINK_RESPONSE", socialLinks });
  };
};

export const commonActions = {
  getSocialLinks
};
