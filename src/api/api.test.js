import { getTweets } from './'

describe('#getTweets()', () => {
  it('should load 1 tweet', async () => {
    const tweets = await getTweets('makeschool', 1);

    expect(tweets).toBeDefined();
    expect(tweets.length).toEqual(1);
  });

  it('should load more tweets', async () => {
    const tweets = await getTweets('makeschool');

    expect(tweets).toBeDefined();
    expect(tweets.length).toBeGreaterThan(10);
  });
});
