async function makeIssue() {
    const token = process.env.GH_TOKEN; // 주의! 일치해야함 (env와 일치해야함)
    // 요고 1
    const OWNER = "hsu-git"; // github 계정 이름
    // 요고 2
    const REPO = "github_power_actions"; //현재 레포지터리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "행운의 숫자",    // 변경
            body: `${Math.floor(Math.random() * 100) + 1}`, // 변경
        })
    });
    if (response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();