const homeScreen = document.querySelector("#screen-home");
const exploreScreen = document.querySelector("#screen-explore");
const communityScreen = document.querySelector("#screen-community");
const questionScreen = document.querySelector("#screen-question");
const profileScreen = document.querySelector("#screen-profile");
const exploreButton = document.querySelector("#explore-button");
const backButton = document.querySelector("#back-button");
const communityButton = document.querySelector("#community-button");
const exploreBackButton = document.querySelector("#explore-back-button");
const questionButton = document.querySelector("#question-button");
const profileButton = document.querySelector("#profile-button");
const communityBackFromQuestion = document.querySelector(
  "#community-back-from-question",
);
const communityBackFromProfile = document.querySelector(
  "#community-back-from-profile",
);
const questionProfileButton = document.querySelector(
  "#question-profile-button",
);
const placeViewpointButton = document.querySelector("#place-viewpoint-button");
const viewpointModel = document.querySelector("#viewpoint-model");
const closeViewpointModel = document.querySelector("#close-viewpoint-model");

function showScreen(screen) {
  const showHome = screen === "home";
  const showExplore = screen === "explore";
  const showCommunity = screen === "community";
  const showQuestion = screen === "question";
  const showProfile = screen === "profile";

  homeScreen.hidden = !showHome;
  homeScreen.setAttribute("aria-hidden", String(!showHome));
  exploreScreen.hidden = !showExplore;
  exploreScreen.setAttribute("aria-hidden", String(!showExplore));
  communityScreen.hidden = !showCommunity;
  communityScreen.setAttribute("aria-hidden", String(!showCommunity));
  questionScreen.hidden = !showQuestion;
  questionScreen.setAttribute("aria-hidden", String(!showQuestion));
  profileScreen.hidden = !showProfile;
  profileScreen.setAttribute("aria-hidden", String(!showProfile));

  window.scrollTo(0, 0);
}

exploreButton.addEventListener("click", () => showScreen("explore"));
backButton.addEventListener("click", () => showScreen("home"));
communityButton.addEventListener("click", () => showScreen("community"));
exploreBackButton.addEventListener("click", () => showScreen("explore"));
questionButton.addEventListener("click", () => showScreen("question"));
profileButton.addEventListener("click", () => showScreen("profile"));
questionProfileButton.addEventListener("click", () => showScreen("profile"));
communityBackFromQuestion.addEventListener("click", () =>
  showScreen("community"),
);
communityBackFromProfile.addEventListener("click", () =>
  showScreen("community"),
);

placeViewpointButton.addEventListener("click", () => {
  viewpointModel.hidden = false;
  viewpointModel.setAttribute("aria-hidden", "false");
});

closeViewpointModel.addEventListener("click", () => {
  viewpointModel.hidden = true;
  viewpointModel.setAttribute("aria-hidden", "true");
});
