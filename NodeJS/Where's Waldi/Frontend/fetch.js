export default async function getRandomImage() {
    const randomId = Math.ceil(Math.random() * 2);

    const res = await fetch(`http://localhost:8080/image/${randomId}`);
    const image = await res.json();

    if(!image) {
        return "error";
    }

    return image;
};

export async function getLeaderboard() {
    const res = await fetch("http://localhost:8080/leaderboard");
    const leaderboard = await res.json();

    return leaderboard;
};