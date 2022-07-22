export async function getPost(id) {

    try {
        return {
            status: response.status,
            post: await response.json(),
        }
    } catch {
        return Error("UPS!");
    }
}