let client: unknown = null;

export async function getTrackClient() {
    if (typeof window === 'undefined') return null;
    if (!client) {
        const { default: init } = await import('@tengence/track-sdk-web');
        client = init({
            accessKey: "vvC4zrq2",
            channelId: "pc-web",
            url: "https://api.tengence.com/v1/push/event",
            realTimeUrl: "https://api.tengence.com/v1/push/real-time-event"
        });
    }
    return client;
}
