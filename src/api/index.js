import RequestService from './RequestService';

const TIMELINE_API_ENDPOINT= `http://localhost:7890/1.1/statuses/user_timeline.json`;

export const getTweets = async (screenName, count = 30) => {
  return RequestService.doRequest(`${TIMELINE_API_ENDPOINT}?count=${count}&screen_name=${screenName}`);
};

export const retweet = async () => {
  throw Error('Not yet implemented!');
};
