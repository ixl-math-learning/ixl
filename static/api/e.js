export async function triggerSecret() {
    try {
        return {
            success: true,
            message: "You Found a Secret! Congrats! Here is a coupon code to buy Void PRO for more then half off! V2025IOT"
        };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
