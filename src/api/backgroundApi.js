const BASE_URL = "/manager";

export async function fetchBackgrounds() {
    const response = await fetch(`${BASE_URL}/background`);
    return response.json();
}

export async function fetchBackgroundById(id) {
    const response = await fetch(`${BASE_URL}/background/${id}`);
    return response.json();
}

export async function createBackground(background) {
    const response = await fetch(`${BASE_URL}/background`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(background)
        }
    );
    return response.json();
}

export async function updateBackground(id, background) {
    const response = await fetch(`${BASE_URL}/background/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(background)
        }
    );
    return response.json();
}

export async function deleteBackground(id) {
    await fetch(`${BASE_URL}/background/${id}`, {
            method: "DELETE"
        }
    );
}