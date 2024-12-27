function GetTelegramUserInfo() {
    if (window.Telegram && window.Telegram.WebApp) {
        return JSON.stringify(window.Telegram.WebApp.initDataUnsafe.user);
    }
    return null;
}

// Hàm gửi thông tin người dùng từ Telegram vào Unity WebGL
function SendTelegramUserInfoToUnity(unityObjectName, unityMethodName) {
    const userInfo = GetTelegramUserInfo();
    if (userInfo) {
        SendMessage(unityObjectName, unityMethodName, userInfo);
    } else {
        console.error("Không thể lấy thông tin người dùng Telegram.");
    }
}