export default {
  user: null,
  modals: {
    postCreateModal: false,
    firstLoginModal: false,
  },
  socialFeedLoadedAt: null,
  socialFeed: {
    lastPostCode: 0,
    pageNum: -1,
    isAtLast: false,
    posts: {
    },
  },
  curationFeed: {

    lastContentCode: 0,
    page: 0,
    sorting: "hot",
    isAtLast: false,
    contents: [],
  },
  archivingFeed: {

  },
}
